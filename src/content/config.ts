import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const manifestoCollection = defineCollection({
  loader: file('src/content/manifests/main.json', {
    parser: (fileContent) => {
      const data = JSON.parse(fileContent);
      // The file contains a single entry with all manifesto data
      // Return as an array with one entry
      return [{ id: 'main', ...data }];
    }
  }),
  schema: z.object({
    id: z.string(),
    principles: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        definition: z.string(),
      })
    ),
    story: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        summary: z.string(),
        content: z.string(),
      })
    ),
    problems: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        summary: z.string(),
        content: z.string(),
      })
    ),
    path: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        summary: z.string(),
        content: z.string(),
      })
    ),
    credits: z.array(
      z.object({
        title: z.string(),
        year: z.string(),
        author: z.string(),
        role: z.string(),
        url: z.string().optional(),
        useBy: z.boolean().optional(),
      })
    ),
  }),
});

export const collections = {
  manifesto: manifestoCollection,
};

// Export inferred types for use in TypeScript code
export type Principle = z.infer<typeof manifestoCollection.schema>['principles'][number];
export type StorySection = z.infer<typeof manifestoCollection.schema>['story'][number];
export type ProblemSection = z.infer<typeof manifestoCollection.schema>['problems'][number];
export type PathSection = z.infer<typeof manifestoCollection.schema>['path'][number];
export type Credit = z.infer<typeof manifestoCollection.schema>['credits'][number];
export type ManifestoData = z.infer<typeof manifestoCollection.schema>;