import { Document } from 'mongoose';

export interface IReport extends Document {
    report_id: string;
    category: string;
    location_context: string;
    description?: string;
    image?: string;
    encrypted_payload: string;
    encryption_iv: string;
    decode_key_hash: string;
    art_id?: string;
    status: 'new' | 'processing' | 'completed';
    created_at: Date;
    updated_at: Date;
}

export interface ICreateReportPayload {
    category: string;
    locationContext: string;
    description: string;
    externalLink?: string;
    image?: string;
}
