import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
    '/',
    validateRequest(UserValidation.createUserValidation),
    UserControllers.createUser,
);

router.get('/', UserControllers.getAllUsers);

router.get('/:id', UserControllers.getUserById);

export const UserRoutes = router;
