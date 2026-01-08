/* eslint-disable no-unused-vars */

import { Document, Types } from 'mongoose';

export type TDecodeStatus = 'pending' | 'success' | 'failed';

export interface TDecode extends Document {
    id: string;
    sourceId: string; // ID of the item being decoded
    key: string;       // The key used for decoding (maybe hashed in real app)
    decodedData?: string;
    status: TDecodeStatus;
    requestedBy: Types.ObjectId;
    isDeleted: boolean;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface TCreateDecodePayload {
    sourceId: string;
    key: string;
}

// Decode logs usually aren't updated manually, but standard CRUD might need it?
// Keeping it minimal.
export interface TUpdateDecodePayload {
    status?: TDecodeStatus;
    decodedData?: string;
}

export interface TDecodeQuery {
    sourceId?: string;
    status?: TDecodeStatus;
    page?: number;
    limit?: number;
}
