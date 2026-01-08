import { z } from 'zod';
import { ArtworkStatus } from './artwork.constant';

export const ArtworkValidation = {
    createArtworkValidation: z.object({
        body: z.object({
            title: z.string().min(1, 'Title is required'),
            description: z.string().optional(),
            svgContent: z.string().min(1, 'SVG Content is required'),
        }),
    }),

    updateArtworkValidation: z.object({
        body: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            svgContent: z.string().optional(),
            status: z.enum([...ArtworkStatus] as [string, ...string[]]).optional(),
        }),
    }),

    queryArtworkValidation: z.object({
        query: z.object({
            search: z.string().optional(),
            status: z.enum([...ArtworkStatus] as [string, ...string[]]).optional(),
            page: z.string().optional(),
            limit: z.string().optional(),
        }),
    }),
};
