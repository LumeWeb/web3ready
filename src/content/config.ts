import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const manifestoCollection = defineCollection({
  loader: file('src/content/manifests/main.json', {
    parser: (fileContent) => {
      try {
        const data = JSON.parse(fileContent);
        // The file contains a single entry with all manifesto data
        // Return as an array with one entry
        return [{ id: 'main', ...data }];
      } catch (error) {
        console.error('Failed to parse manifesto JSON:', error);
        throw new Error(`Invalid JSON in manifesto file: ${error instanceof Error ? error.message : String(error)}`);
      }
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
const manifestoSchema = z.object({
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
});

export type ManifestoData = z.infer<typeof manifestoSchema>;
export type Principle = ManifestoData['principles'][number];
export type StorySection = ManifestoData['story'][number];
export type ProblemSection = ManifestoData['problems'][number];
export type PathSection = ManifestoData['path'][number];
export type Credit = ManifestoData['credits'][number];