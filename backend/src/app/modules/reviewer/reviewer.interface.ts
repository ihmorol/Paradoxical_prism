/* eslint-disable no-unused-vars */

import { Document, Types } from 'mongoose';

export type TReviewerStatus = 'active' | 'inactive' | 'suspended';

export interface TReviewer extends Document {
    id: string;
    userId: Types.ObjectId;
    specialization: string[];
    rating: number;
    totalReviews: number;
    status: TReviewerStatus;
    isDeleted: boolean;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface TCreateReviewerPayload {
    specialization: string[];
}

export interface TUpdateReviewerPayload {
    specialization?: string[];
    status?: TReviewerStatus;
    rating?: number; // Usually updated by system, but allowed here for simplicity
}

export interface TReviewerQuery {
    search?: string; // Search by specialization?
    status?: TReviewerStatus;
    page?: number;
    limit?: number;
}
