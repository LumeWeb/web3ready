import type { Principle } from '@/content/config';

interface PrincipleCardCollapsibleProps {
  principle: Principle;
}

export function PrincipleCardCollapsible({ principle }: PrincipleCardCollapsibleProps) {
  return (
    <details className="group border border-terminal rounded-lg bg-deep-black/50 overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-white/5 transition-colors list-none select-none">
        <div className="flex items-center gap-4">
          <span className="font-mono text-primary text-xl font-bold">{principle.id}</span>
          <h2 className="text-white/90 font-medium">{principle.title}</h2>
        </div>
        <span className="font-mono text-primary text-2xl group-open:rotate-45 transition-transform duration-300 ease-in-out ml-4 flex-shrink-0">
          +
        </span>
      </summary>
      <div className="px-6 pb-6 pt-0">
        <div className="border-t border-terminal/50 pt-6 mt-2 text-white/80 leading-relaxed font-light">
          <p className="whitespace-pre-wrap">{principle.definition}</p>
        </div>
      </div>
    </details>
  );
}
