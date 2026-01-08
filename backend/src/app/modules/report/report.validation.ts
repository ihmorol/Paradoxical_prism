import { z } from 'zod';
import { ReportStatus, ReportSeverity } from './report.constant';

export const ReportValidation = {
    createReportValidation: z.object({
        body: z.object({
            title: z.string().min(1, 'Title is required'),
            description: z.string().min(1, 'Description is required'),
            type: z.string().min(1, 'Type is required'),
            severity: z.enum([...ReportSeverity] as [string, ...string[]]).optional(),
        }),
    }),

    updateReportValidation: z.object({
        body: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            status: z.enum([...ReportStatus] as [string, ...string[]]).optional(),
            severity: z.enum([...ReportSeverity] as [string, ...string[]]).optional(),
            assigneeId: z.string().optional(),
            resolution: z.string().optional(),
        }),
    }),

    queryReportValidation: z.object({
        query: z.object({
            search: z.string().optional(),
            status: z.enum([...ReportStatus] as [string, ...string[]]).optional(),
            severity: z.enum([...ReportSeverity] as [string, ...string[]]).optional(),
            type: z.string().optional(),
            page: z.string().optional(),
            limit: z.string().optional(),
        }),
    }),
};
