import { z } from 'zod';
import { ReviewerStatus } from './reviewer.constant';

export const ReviewerValidation = {
    createReviewerValidation: z.object({
        body: z.object({
            specialization: z.array(z.string()).optional(),
        }),
    }),

    updateReviewerValidation: z.object({
        body: z.object({
            specialization: z.array(z.string()).optional(),
            status: z.enum([...ReviewerStatus] as [string, ...string[]]).optional(),
        }),
    }),

    queryReviewerValidation: z.object({
        query: z.object({
            search: z.string().optional(),
            status: z.enum([...ReviewerStatus] as [string, ...string[]]).optional(),
            page: z.string().optional(),
            limit: z.string().optional(),
        }),
    }),
};
