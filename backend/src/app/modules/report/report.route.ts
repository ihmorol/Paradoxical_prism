import express from 'express';
import { ReportControllers } from './report.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ReportValidation } from './report.validation';

const router = express.Router();

router.post(
    '/',
    validateRequest(ReportValidation.createReportValidationSchema),
    ReportControllers.createReport
);

export const ReportRoutes = router;
