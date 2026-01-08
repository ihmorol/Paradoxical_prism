import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewerServices } from './reviewer.service';

const createReviewer = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const result = await ReviewerServices.createReviewer(userId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Reviewer profile created successfully',
        data: result,
    });
});

const getMyProfile = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const result = await ReviewerServices.getReviewerByUserId(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My profile retrieved successfully',
        data: result,
    });
});

const getAllReviewers = catchAsync(async (req, res) => {
    const result = await ReviewerServices.getAllReviewers(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviewers retrieved successfully',
        data: result.data,
        meta: result.meta,
    });
});

const getReviewerById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ReviewerServices.getReviewerById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviewer retrieved successfully',
        data: result,
    });
});

const updateReviewer = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    const result = await ReviewerServices.updateReviewer(id, userId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviewer updated successfully',
        data: result,
    });
});

const deleteReviewer = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    await ReviewerServices.deleteReviewer(id, userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviewer deleted successfully',
        data: null,
    });
});

export const ReviewerControllers = {
    createReviewer,
    getMyProfile,
    getAllReviewers,
    getReviewerById,
    updateReviewer,
    deleteReviewer,
};
