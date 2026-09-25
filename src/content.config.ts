import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tomos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tomos' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    year: z.number().int(),
    volume: z.number().int().positive(),
    volumeLabel: z.string(),
    slug: z.string(),
    status: z.enum(['disponible', 'en-preparacion', 'planeado']),
    cover: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    legacyPath: z.string().optional(),
    stableComponents: z.boolean().default(true),
  }),
});

export const collections = { tomos };
