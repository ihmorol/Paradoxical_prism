import { nanoid } from 'nanoid';
import crypto from 'crypto';
import { ICreateReportPayload } from './report.interface';
import { Report } from './report.model';
import { encrypt, hash } from '../../utils/encryption';

const createReportInDB = async (payload: ICreateReportPayload) => {
    // 1. Generate unique reportId
    const reportId = nanoid();

    // 2. Generate secure random decodeKey
    const decodeKey = crypto.randomBytes(32).toString('hex');

    // 3. Hash the decodeKey
    const decodeKeyHash = hash(decodeKey);

    // 4. Encrypt sensitive data
    const dataToEncrypt = JSON.stringify({
        description: payload.description,
        externalLink: payload.externalLink,
    });
    const encrypted = encrypt(dataToEncrypt);

    // 5. Derive artwork seed (placeholder logic)
    const artId = hash(reportId + payload.category);

    // 6. Save to DB
    const newReport = await Report.create({
        report_id: reportId, // SAVING report_id
        category: payload.category,
        location_context: payload.locationContext,
        encrypted_payload: encrypted.content,
        encryption_iv: encrypted.iv,
        decode_key_hash: decodeKeyHash,
        art_id: artId,
        status: 'new',
    });

    // 7. Return response data
    return {
        reportId,
        artId,
        decodeKey,
        createdAt: newReport.created_at,
        category: newReport.category,
    };
};

export const ReportServices = {
    createReportInDB,
};
