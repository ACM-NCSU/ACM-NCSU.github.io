import { defineCollection, z } from 'astro:content';

const events = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        image: image(), 
        location: z.string().optional(),
        description: z.string().optional(),
    }),
});

export const collections = { events };