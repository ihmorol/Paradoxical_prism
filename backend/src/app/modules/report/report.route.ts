import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReportControllers } from './report.controller';
import { ReportValidation } from './report.validation';

const router = express.Router();

router.post(
    '/',
    auth(),
    validateRequest(ReportValidation.createReportValidation),
    ReportControllers.createReport
);

router.get(
    '/',
    auth(),
    validateRequest(ReportValidation.queryReportValidation),
    ReportControllers.getAllReports
);

router.get('/:id', auth(), ReportControllers.getReportById);

router.patch(
    '/:id',
    auth(),
    validateRequest(ReportValidation.updateReportValidation),
    ReportControllers.updateReport
);

router.delete('/:id', auth(), ReportControllers.deleteReport);

export const ReportRoutes = router;
