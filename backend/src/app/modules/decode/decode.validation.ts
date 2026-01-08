import { z } from 'zod';
import { DecodeStatus } from './decode.constant';

export const DecodeValidation = {
    createDecodeValidation: z.object({
        body: z.object({
            sourceId: z.string().min(1, 'Source ID is required'),
            key: z.string().min(1, 'Key is required'),
        }),
    }),

    // Optional: usually decode logs are immutable
    updateDecodeValidation: z.object({
        body: z.object({
            status: z.enum([...DecodeStatus] as [string, ...string[]]).optional(),
            decodedData: z.string().optional(),
        }),
    }),

    queryDecodeValidation: z.object({
        query: z.object({
            sourceId: z.string().optional(),
            status: z.enum([...DecodeStatus] as [string, ...string[]]).optional(),
            page: z.string().optional(),
            limit: z.string().optional(),
        }),
    }),
};
