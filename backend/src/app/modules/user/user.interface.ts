/* eslint-disable no-unused-vars */
import { Document } from 'mongoose';

export type TUserRole = 'user' | 'admin' | 'superAdmin' | 'reviewer';
export type TUserStatus = 'active' | 'blocked';

export interface TUser extends Document {
    id: string;
    fullName: string;
    email: string;
    password?: string; // Optional because we might exclude it in queries
    role: TUserRole;
    status: TUserStatus;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
