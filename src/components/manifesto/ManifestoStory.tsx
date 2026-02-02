import type { StorySection } from '@/content/config';
import { ExpandableSection } from './ExpandableSection';

export interface ManifestoStoryProps {
  story: StorySection[];
}

export function ManifestoStory({ story }: ManifestoStoryProps) {
  return (
    <section className="flex flex-col gap-6">
      {story.map((item) => (
        <ExpandableSection key={item.id} title={item.title} summary={item.summary} id={item.id}>
          <p className="whitespace-pre-wrap">{item.content}</p>
        </ExpandableSection>
      ))}
    </section>
  );
}