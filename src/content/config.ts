import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        category: z.string(),
        image: z.string().optional(),
    }),
});
export const collections = { blog };