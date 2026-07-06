import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // YouTube video ID or any youtube.com/youtu.be URL; renders a
    // click-to-play embed at the top of the post.
    youtube: z.string().optional(),
  }),
});

export const collections = { blog };
