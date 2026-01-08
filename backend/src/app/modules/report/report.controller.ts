import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReportServices } from './report.service';

const createReport = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const result = await ReportServices.createReport(userId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Report created successfully',
        data: result,
    });
});

const getAllReports = catchAsync(async (req, res) => {
    const result = await ReportServices.getAllReports(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reports retrieved successfully',
        data: result.data,
        meta: result.meta,
    });
});

const getReportById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ReportServices.getReportById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Report retrieved successfully',
        data: result,
    });
});

const updateReport = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    const result = await ReportServices.updateReport(id, userId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Report updated successfully',
        data: result,
    });
});

const deleteReport = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    await ReportServices.deleteReport(id, userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Report deleted successfully',
        data: null,
    });
});

export const ReportControllers = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport,
};
