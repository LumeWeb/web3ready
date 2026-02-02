import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type {
  Principle,
  StorySection,
  ProblemSection,
  PathSection,
  Credit,
  ManifestoData,
} from '@/content/config';

type ManifestoCollection = CollectionEntry<'manifesto'>;

async function getManifestData(): Promise<ManifestoData> {
  const manifests = await getCollection('manifesto');
  const manifest = manifests.find((entry) => entry.id === 'main');
  
  if (!manifest) {
    throw new Error('Manifest data not found in collection');
  }
  
  return manifest.data as ManifestoData;
}

let manifestoCache: ManifestoData | null = null;

export async function getPrinciples(): Promise<Principle[]> {
  const data = manifestoCache ?? await getManifestData();
  return data.principles;
}

export async function getStory(): Promise<StorySection[]> {
  const data = manifestoCache ?? await getManifestData();
  return data.story;
}

export async function getProblems(): Promise<ProblemSection[]> {
  const data = manifestoCache ?? await getManifestData();
  return data.problems;
}

export async function getPath(): Promise<PathSection[]> {
  const data = manifestoCache ?? await getManifestData();
  return data.path;
}

export async function getCredits(): Promise<Credit[]> {
  const data = manifestoCache ?? await getManifestData();
  return data.credits;
}