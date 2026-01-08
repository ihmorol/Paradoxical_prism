import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DecodeServices } from './decode.service';

const createDecode = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const result = await DecodeServices.createDecode(userId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Decode request submitted successfully',
        data: result,
    });
});

const getAllDecodes = catchAsync(async (req, res) => {
    const result = await DecodeServices.getAllDecodes(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Decode records retrieved successfully',
        data: result.data,
        meta: result.meta,
    });
});

const getDecodeById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await DecodeServices.getDecodeById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Decode record retrieved successfully',
        data: result,
    });
});

const deleteDecode = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    await DecodeServices.deleteDecode(id, userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Decode record deleted successfully',
        data: null,
    });
});

export const DecodeControllers = {
    createDecode,
    getAllDecodes,
    getDecodeById,
    deleteDecode,
};
