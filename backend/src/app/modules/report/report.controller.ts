import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ReportServices } from './report.service';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const createReport = async (req: Request, res: Response) => {
    try {
        if (req.file) {
            const imageName = `${req.file.fieldname}-${Date.now()}`;
            const path = req.file.path;
            const { secure_url } = (await sendImageToCloudinary(imageName, path)) as any;
            req.body.image = secure_url;
        }

        const result = await ReportServices.createReportInDB(req.body);

        res.status(httpStatus.CREATED).json({
            success: true,
            message: 'Report created successfully',
            data: result,
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Failed to create report',
            error: error,
        });
    }
};

const getAllReports = async (req: Request, res: Response) => {
    try {
        const result = await ReportServices.getAllReportsFromDB();
        res.status(httpStatus.OK).json({
            success: true,
            message: 'Reports retrieved successfully',
            data: result,
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Failed to retrieve reports',
            error: error,
        });
    }
};

const updateReportStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const result = await ReportServices.updateReportStatusInDB(id, status);
        res.status(httpStatus.OK).json({
            success: true,
            message: 'Report status updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Failed to update report status',
            error: error,
        });
    }
};

const getReportById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await ReportServices.getReportByIdFromDB(id);
        res.status(httpStatus.OK).json({
            success: true,
            message: 'Report retrieved successfully',
            data: result,
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Failed to retrieve report',
            error: error,
        });
    }
};

export const ReportControllers = {
    createReport,
    getAllReports,
    getReportById,
    updateReportStatus,
};
