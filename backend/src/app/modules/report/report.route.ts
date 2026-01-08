import express from 'express';
import { ReportControllers } from './report.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ReportValidation } from './report.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.post(
    '/',
    upload.single('file'),
    (req, res, next) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    validateRequest(ReportValidation.createReportValidationSchema),
    ReportControllers.createReport
);

router.get('/', ReportControllers.getAllReports);

router.get('/:id', ReportControllers.getReportById);

router.patch('/:id', ReportControllers.updateReportStatus);

export const ReportRoutes = router;
