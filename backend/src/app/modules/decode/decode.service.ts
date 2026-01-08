/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { Report } from '../report/report.model';
import { hash } from '../../utils/encryption';
import { TCreateDecodePayload, TDecodeQuery } from './decode.interface';
import { Decode } from './decode.model';
import { generateDecodeId } from './decode.utils';
import { DecodeSearchableFields } from './decode.constant';

const createDecode = async (userId: string, payload: TCreateDecodePayload) => {
    // 1. Find the Report
    const report = await Report.findOne({ report_id: payload.sourceId });
    if (!report) {
        throw new AppError(httpStatus.NOT_FOUND, 'Report not found');
    }

    // 2. Hash the provided key to verify
    const keyHash = hash(payload.key);

    // 3. Check if hash matches
    if (keyHash !== report.decode_key_hash) {
        throw new AppError(httpStatus.FORBIDDEN, 'Invalid Decode Key');
    }

    const decodeId = await generateDecodeId();

    const newDecode = await Decode.create({
        id: decodeId,
        sourceId: payload.sourceId,
        key: payload.key, // In real app, consider not saving the key or hashing it again
        decodedData: 'Access Granted', // Or some log
        requestedBy: userId,
        status: 'success',
    });

    // 4. Return the Reveal Data
    return {
        success: true,
        message: 'Decryption Successful',
        data: {
            description: report.description,
            image: report.image,
            locationContext: report.location_context,
            category: report.category,
            timestamp: report.created_at,
        }
    };
};

const getAllDecodes = async (query: TDecodeQuery) => {
    const { sourceId, status, page = 1, limit = 10 } = query;
    const filter: any = { isDeleted: { $ne: true } };

    if (sourceId) { // Search by sourceId
        filter.sourceId = { $regex: sourceId, $options: 'i' };
    }

    if (status) {
        filter.status = status;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const decodes = await Decode.find(filter)
        .populate('requestedBy', 'id fullName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit));

    const total = await Decode.countDocuments(filter);

    return {
        data: decodes,
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
            totalPage: Math.ceil(total / Number(limit)),
        },
    };
};

const getDecodeById = async (id: string) => {
    const decode = await Decode.findOne({ id }).populate('requestedBy', 'id fullName email');
    if (!decode) {
        throw new AppError(httpStatus.NOT_FOUND, 'Decode record not found');
    }
    return decode;
};

// Deletes strictly soft delete
const deleteDecode = async (id: string, userId: string) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const decode = await Decode.findOne({ id });
    if (!decode) {
        throw new AppError(httpStatus.NOT_FOUND, 'Decode record not found');
    }

    if (decode.requestedBy.toString() !== user._id.toString()) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized to delete this record');
    }

    await Decode.findOneAndUpdate({ id }, { isDeleted: true, deletedAt: new Date() });
    return null;
};

export const DecodeServices = {
    createDecode,
    getAllDecodes,
    getDecodeById,
    deleteDecode,
};
