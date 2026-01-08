import crypto from 'crypto';
import config from '../config';

const ALGORITHM = 'aes-256-gcm';
// Ensure we have a valid 32-byte key. In production, this should come from process.env and be strictly managed.
// For now, if config.encryptionKey is not set or short, we might need a fallback or throw error.
// Assuming config has a defined ENCRYPTION_KEY or similar.
const SECRET_KEY = process.env.ENCRYPTION_KEY || 'default_secret_key_must_be_32_bytes_long!!';

// Helper to ensure key is 32 bytes
const getKey = () => {
    return crypto.scryptSync(SECRET_KEY, 'salt', 32);
};

export const encrypt = (text: string): { content: string; iv: string } => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, getKey(), iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag();

    // We append authTag to content or store separately. 
    // Standard practice with GCM: iv + encrypted_content + auth_tag 
    // But requirement says: return { content: string, iv: string }
    // We need to store authTag to decrypt. 
    // Let's return content = encrypted + authTag to be safe or just append it.
    // Actually, 'content' usually implies just the ciphertext, but without authTag GCM fails.
    // Let's combine: content = encryptedHex + authTagHex

    return {
        content: encrypted + authTag.toString('hex'),
        iv: iv.toString('hex'),
    };
};

export const decrypt = (encryptedContent: string, ivHex: string): string => {
    const iv = Buffer.from(ivHex, 'hex');
    const authTagLength = 32; // 16 bytes * 2 for hex
    const encryptedText = encryptedContent.slice(0, -authTagLength);
    const authTag = Buffer.from(encryptedContent.slice(-authTagLength), 'hex');

    const decipher = crypto.createDecipheriv(ALGORITHM, getKey(), iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
};

export const hash = (text: string): string => {
    return crypto.createHash('sha256').update(text).digest('hex');
};
