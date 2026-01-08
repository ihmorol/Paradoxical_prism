import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from './user.model';
import { TUser } from './user.interface';

const createUser = async (payload: TUser) => {
    // Check if user already exists
    const existingUser = await User.findOne({ email: payload.email });
    if (existingUser) {
        throw new AppError(httpStatus.CONFLICT, 'User with this email already exists');
    }

    const result = await User.create(payload);
    return result;
};

const getAllUsers = async () => {
    const result = await User.find();
    return result;
};

const getUserById = async (id: string) => {
    const result = await User.findOne({ id });
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }
    return result;
};

export const UserServices = {
    createUser,
    getAllUsers,
    getUserById,
};
