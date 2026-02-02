import type { Principle } from '@/content/config';
import { PrincipleCard } from './PrincipleCard';

export interface ManifestoPrinciplesProps {
  principles: Principle[];
}

export function ManifestoPrinciples({ principles }: ManifestoPrinciplesProps) {
  return (
    <section className="grid gap-6">
      {principles.map((principle) => (
        <PrincipleCard key={principle.id} principle={principle} />
      ))}
    </section>
  );
}