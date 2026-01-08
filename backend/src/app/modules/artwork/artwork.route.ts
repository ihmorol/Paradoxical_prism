import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ArtworkControllers } from './artwork.controller';
import { ArtworkValidation } from './artwork.validation';

const router = express.Router();

router.post(
    '/',
    auth(),
    validateRequest(ArtworkValidation.createArtworkValidation),
    ArtworkControllers.createArtwork
);

router.get(
    '/',
    validateRequest(ArtworkValidation.queryArtworkValidation),
    ArtworkControllers.getAllArtworks
);

router.get('/:id', ArtworkControllers.getArtworkById);

router.patch(
    '/:id',
    auth(),
    validateRequest(ArtworkValidation.updateArtworkValidation),
    ArtworkControllers.updateArtwork
);

router.delete('/:id', auth(), ArtworkControllers.deleteArtwork);

export const ArtworkRoutes = router;
