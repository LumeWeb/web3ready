import type { Principle } from '@/content/config';

interface PrincipleCardProps {
  principle: Principle;
}

export function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <article className="group border border-terminal rounded-lg bg-deep-black/50 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="font-mono text-primary text-xl font-bold">{principle.id} / {principle.title.toUpperCase()}</span>
        </div>
        <p className="text-white/90 leading-relaxed font-light">{principle.definition}</p>
      </div>
    </article>
  );
}