/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TCreateDecodePayload, TDecodeQuery } from './decode.interface';
import { Decode } from './decode.model';
import { generateDecodeId } from './decode.utils';
import { DecodeSearchableFields } from './decode.constant';

const createDecode = async (userId: string, payload: TCreateDecodePayload) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const decodeId = await generateDecodeId();

    // Mock decoding logic or just store request
    // In real app, we might check the key against the artwork/source

    const newDecode = await Decode.create({
        id: decodeId,
        ...payload,
        requestedBy: user._id,
        status: 'pending', // Or 'success' if immediate
    });

    return newDecode;
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
