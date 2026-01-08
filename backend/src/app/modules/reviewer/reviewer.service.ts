/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TCreateReviewerPayload, TReviewerQuery, TUpdateReviewerPayload } from './reviewer.interface';
import { Reviewer } from './reviewer.model';
import { generateReviewerId } from './reviewer.utils';
import { ReviewerSearchableFields } from './reviewer.constant';

const createReviewer = async (userId: string, payload: TCreateReviewerPayload) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    // Check if profile already exists
    const existingProfile = await Reviewer.findOne({ userId: user._id });
    if (existingProfile) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Reviewer profile already exists');
    }

    const reviewerId = await generateReviewerId();

    const newReviewer = await Reviewer.create({
        id: reviewerId,
        ...payload,
        userId: user._id,
    });

    return newReviewer;
};

const getReviewerByUserId = async (userId: string) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const reviewer = await Reviewer.findOne({ userId: user._id }).populate('userId', 'id fullName email');
    if (!reviewer) {
        throw new AppError(httpStatus.NOT_FOUND, 'Reviewer profile not found');
    }
    return reviewer;
};

const getAllReviewers = async (query: TReviewerQuery) => {
    const { search, status, page = 1, limit = 10 } = query;
    const filter: any = { isDeleted: { $ne: true } };

    if (search) {
        // Search in specialization array? Or user name?
        // Keeping simple: search specialization tags
        filter.specialization = { $in: [new RegExp(search, 'i')] };
    }

    if (status) {
        filter.status = status;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const reviewers = await Reviewer.find(filter)
        .populate('userId', 'id fullName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit));

    const total = await Reviewer.countDocuments(filter);

    return {
        data: reviewers,
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
            totalPage: Math.ceil(total / Number(limit)),
        },
    };
};

const getReviewerById = async (id: string) => {
    const reviewer = await Reviewer.findOne({ id }).populate('userId', 'id fullName email');
    if (!reviewer) {
        throw new AppError(httpStatus.NOT_FOUND, 'Reviewer not found');
    }
    return reviewer;
};

const updateReviewer = async (id: string, userId: string, payload: TUpdateReviewerPayload) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const reviewer = await Reviewer.findOne({ id });
    if (!reviewer) {
        throw new AppError(httpStatus.NOT_FOUND, 'Reviewer not found');
    }

    // Only owner can update profile? Or admin?
    if (reviewer.userId.toString() !== user._id.toString()) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized to update this profile');
    }

    const result = await Reviewer.findOneAndUpdate({ id }, payload, {
        new: true,
        runValidators: true,
    });

    return result;
};

const deleteReviewer = async (id: string, userId: string) => {
    // Implementation similar to others
    // Omitted for brevity unless strictly needed, but scaffolding implies completeness
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const reviewer = await Reviewer.findOne({ id });
    if (!reviewer) {
        throw new AppError(httpStatus.NOT_FOUND, 'Reviewer not found');
    }

    if (reviewer.userId.toString() !== user._id.toString()) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized to delete this profile');
    }

    await Reviewer.findOneAndUpdate({ id }, { isDeleted: true, deletedAt: new Date() });
    return null;
};

export const ReviewerServices = {
    createReviewer,
    getReviewerByUserId,
    getAllReviewers,
    getReviewerById,
    updateReviewer,
    deleteReviewer,
};
