/* eslint-disable no-unused-vars */

import { Document, Types } from 'mongoose';

export type TReportStatus = 'open' | 'in-progress' | 'resolved' | 'closed';
export type TReportSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface TReport extends Document {
    id: string;
    title: string;
    description: string;
    type: string;
    severity: TReportSeverity;
    status: TReportStatus;
    reporterId: Types.ObjectId;
    assigneeId?: Types.ObjectId;
    resolution?: string;
    isDeleted: boolean;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface TCreateReportPayload {
    title: string;
    description: string;
    type: string;
    severity?: TReportSeverity;
}

export interface TUpdateReportPayload {
    title?: string;
    description?: string;
    status?: TReportStatus;
    severity?: TReportSeverity;
    assigneeId?: string; // ID string, to be converted to ObjectId in service
    resolution?: string;
}

export interface TReportQuery {
    search?: string;
    status?: TReportStatus;
    severity?: TReportSeverity;
    type?: string;
    page?: number;
    limit?: number;
}
