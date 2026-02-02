import { tv, cn } from 'tailwind-variants';

const manifestoSection = tv({
  slots: {
    base: 'w-full max-w-[1200px] px-6 md:px-20 lg:px-40 py-20 border-t border-primary/10',
    grid: 'grid grid-cols-1 lg:grid-cols-12 gap-12',
    sidebar: 'lg:col-span-4',
    sidebarTitle: 'text-primary font-mono text-2xl font-bold sticky top-32 uppercase tracking-widest',
    sidebarNumber: 'text-xs block text-cyan/60 font-normal mb-2',
    content: 'lg:col-span-8',
    prose: 'prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed text-lg',
    codeBlock: 'terminal-border border-l-4 border-l-primary p-6 bg-white/5 font-mono text-sm text-primary/80',
  },
});

export interface ManifestoSectionProps {
  number?: string;
  title?: string;
  children: React.ReactNode;
  codeBlock?: string;
  className?: string;
}

export function ManifestoSection({
  number = '01',
  title = 'The Manifesto',
  children,
  codeBlock,
  className,
}: ManifestoSectionProps) {
  const { base, grid, sidebar, sidebarTitle, sidebarNumber, content, prose, codeBlock: codeBlockClass } = manifestoSection();

  return (
    <section className={cn(base(), className)}>
      <div className={grid()}>
        <div className={sidebar()}>
          <h2 className={sidebarTitle()}>
            <span className={sidebarNumber()}>{number} // IDENTITY</span>
            {title}
          </h2>
        </div>
        <div className={content()}>
          <div className={prose()}>
            {children}
          </div>
          {codeBlock && (
            <div className={codeBlockClass()}>
              {codeBlock.split('<br/>').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
