import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/site' }),
  schema: z.object({
    disclaimer: z.string(),
    trustPoints: z.array(z.string()),
    brandApplications: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
    premiumReasons: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const collections = { site };
