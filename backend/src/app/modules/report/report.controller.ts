import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ReportServices } from './report.service';

const createReport = async (req: Request, res: Response) => {
    try {
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

export const ReportControllers = {
    createReport,
};
