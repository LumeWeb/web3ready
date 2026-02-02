interface ExpandableSectionProps {
  title: string;
  summary: string;
  id?: string;
  children: React.ReactNode;
}

export function ExpandableSection({ title, summary, id, children }: ExpandableSectionProps) {
  return (
    <details className="group border border-terminal rounded-lg bg-deep-black/50 overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-white/5 transition-colors list-none">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-primary text-sm uppercase tracking-widest">{title}</span>
          <span className="text-white/70 font-light">{summary}</span>
        </div>
        <span className="font-mono text-primary text-xl group-open:rotate-45 transition-transform">+</span>
      </summary>
      <div className="px-6 pb-6 pt-0 text-white/80 leading-relaxed font-light border-t border-terminal/50 mt-2">
        {children}
      </div>
    </details>
  );
}