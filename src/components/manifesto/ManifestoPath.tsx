import type { PathSection } from '@/content/config';
import { ExpandableSection } from './ExpandableSection';

export interface ManifestoPathProps {
  path: PathSection[];
}

export function ManifestoPath({ path }: ManifestoPathProps) {
  return (
    <section className="flex flex-col gap-6">
      {path.map((item) => (
        <ExpandableSection key={item.id} title={item.title} summary={item.summary} id={item.id}>
          <p className="whitespace-pre-wrap">{item.content}</p>
        </ExpandableSection>
      ))}
    </section>
  );
}