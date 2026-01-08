/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model'; // Assuming User model exists at this path
import { TCreateArtworkPayload, TArtworkQuery, TUpdateArtworkPayload } from './artwork.interface';
import { Artwork } from './artwork.model';
import { generateArtworkId } from './artwork.utils';
import { ArtworkSearchableFields } from './artwork.constant';

const createArtwork = async (userId: string, payload: TCreateArtworkPayload) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const artworkId = await generateArtworkId();

    const newArtwork = await Artwork.create({
        id: artworkId,
        ...payload,
        createdBy: user._id,
    });

    return newArtwork;
};

const getAllArtworks = async (query: TArtworkQuery) => {
    const { search, status, page = 1, limit = 10 } = query;
    const filter: any = { isDeleted: { $ne: true } };

    if (search) {
        filter.$or = ArtworkSearchableFields.map((field) => ({
            [field]: { $regex: search, $options: 'i' },
        }));
    }

    if (status) {
        filter.status = status;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const artworks = await Artwork.find(filter)
        .populate('createdBy', 'id fullName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit));

    const total = await Artwork.countDocuments(filter);

    return {
        data: artworks,
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
            totalPage: Math.ceil(total / Number(limit)),
        },
    };
};

const getArtworkById = async (id: string) => {
    const artwork = await Artwork.findOne({ id }).populate('createdBy', 'id fullName email');
    if (!artwork) {
        throw new AppError(httpStatus.NOT_FOUND, 'Artwork not found');
    }
    return artwork;
};

const updateArtwork = async (id: string, userId: string, payload: TUpdateArtworkPayload) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const artwork = await Artwork.findOne({ id });
    if (!artwork) {
        throw new AppError(httpStatus.NOT_FOUND, 'Artwork not found');
    }

    // Authorization check: only creator can update? Or maybe admin too.
    if (artwork.createdBy.toString() !== user._id.toString()) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized to update this artwork');
    }

    const result = await Artwork.findOneAndUpdate({ id }, payload, {
        new: true,
        runValidators: true,
    });

    return result;
};

const deleteArtwork = async (id: string, userId: string) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const artwork = await Artwork.findOne({ id });
    if (!artwork) {
        throw new AppError(httpStatus.NOT_FOUND, 'Artwork not found');
    }

    if (artwork.createdBy.toString() !== user._id.toString()) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized to delete this artwork');
    }

    await Artwork.findOneAndUpdate({ id }, { isDeleted: true, deletedAt: new Date() });
    return null;
};

export const ArtworkServices = {
    createArtwork,
    getAllArtworks,
    getArtworkById,
    updateArtwork,
    deleteArtwork,
};
