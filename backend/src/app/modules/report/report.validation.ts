import { z } from 'zod';

const createReportValidationSchema = z.object({
    body: z.object({
        category: z.string({ required_error: 'Category is required' }),
        locationContext: z.string({ required_error: 'Location context is required' }),
        description: z.string({ required_error: 'Description is required' }),
        externalLink: z.string().url('Invalid URL').optional(),
    }),
});

export const ReportValidation = {
    createReportValidationSchema,
};
