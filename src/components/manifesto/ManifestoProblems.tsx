import type { ProblemSection } from '@/content/config';
import { ExpandableSection } from './ExpandableSection';

export interface ManifestoProblemsProps {
  problems: ProblemSection[];
}

export function ManifestoProblems({ problems }: ManifestoProblemsProps) {
  return (
    <section className="flex flex-col gap-6">
      {problems.map((item) => (
        <ExpandableSection key={item.id} title={item.title} summary={item.summary} id={item.id}>
          <p className="whitespace-pre-wrap">{item.content}</p>
        </ExpandableSection>
      ))}
    </section>
  );
}