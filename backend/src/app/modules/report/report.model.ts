import { Schema, model } from 'mongoose';
import { IReport } from './report.interface';

const reportSchema = new Schema<IReport>(
    {
        report_id: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: String,
            required: true,
        },
        location_context: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        encrypted_payload: {
            type: String,
            required: true,
        },
        encryption_iv: {
            type: String,
            required: true,
        },
        decode_key_hash: {
            type: String,
            required: true,
        },
        art_id: {
            type: String,
        },
        status: {
            type: String,
            enum: ['new', 'processing', 'completed'],
            default: 'new',
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

export const Report = model<IReport>('Report', reportSchema);
