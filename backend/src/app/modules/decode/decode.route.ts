import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { DecodeControllers } from './decode.controller';
import { DecodeValidation } from './decode.validation';

const router = express.Router();

router.post(
    '/',
    auth(),
    validateRequest(DecodeValidation.createDecodeValidation),
    DecodeControllers.createDecode
);

router.get(
    '/',
    auth(), // Secured all decode logs to auth users
    validateRequest(DecodeValidation.queryDecodeValidation),
    DecodeControllers.getAllDecodes
);

router.get('/:id', auth(), DecodeControllers.getDecodeById);

router.delete('/:id', auth(), DecodeControllers.deleteDecode);

export const DecodeRoutes = router;
