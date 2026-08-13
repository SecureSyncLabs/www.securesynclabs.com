import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const about = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
	schema: z.object({
		title: z.string(),
		role: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
});

export const collections = { about };
