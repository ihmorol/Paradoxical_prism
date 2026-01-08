import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewerControllers } from './reviewer.controller';
import { ReviewerValidation } from './reviewer.validation';

const router = express.Router();

router.post(
    '/',
    auth(),
    validateRequest(ReviewerValidation.createReviewerValidation),
    ReviewerControllers.createReviewer
);

router.get(
    '/me',
    auth(),
    ReviewerControllers.getMyProfile
);

router.get(
    '/',
    validateRequest(ReviewerValidation.queryReviewerValidation),
    ReviewerControllers.getAllReviewers
);

// Specific ID routes come after specific paths like /me
router.get('/:id', ReviewerControllers.getReviewerById);

router.patch(
    '/:id',
    auth(),
    validateRequest(ReviewerValidation.updateReviewerValidation),
    ReviewerControllers.updateReviewer
);

router.delete('/:id', auth(), ReviewerControllers.deleteReviewer);

export const ReviewerRoutes = router;
