import { tv, cn } from 'tailwind-variants';
import { Button } from '@/components/ui/button';

const cta = tv({
  slots: {
    base: 'w-full max-w-[1200px] px-6 md:px-20 lg:px-40 py-32',
    card: 'terminal-border p-12 text-center bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden',
    icon: 'text-primary text-6xl mb-6 opacity-50',
    title: 'text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-tight',
    description: 'text-gray-400 mb-10 max-w-xl mx-auto font-mono text-sm',
    buttons: 'flex flex-col md:flex-row gap-4 justify-center items-center',
    version: 'absolute bottom-4 right-4 text-[10px] font-mono text-primary/20 pointer-events-none uppercase',
  },
});

export interface CTAProps {
  icon?: string;
  title?: string;
  description?: string;
  primaryButton?: { text: string; icon?: string; href?: string };
  secondaryButton?: { text: string; href?: string };
  version?: string;
  className?: string;
}

export function CTA({
  icon = 'shield_lock',
  title = 'Challenge the Protocol',
  description = 'This is an open source initiative. Our code is our manifesto. Read it, audit it, fork it. If you find a flaw in the logic, pull request the future.',
  primaryButton = { text: 'GITHUB REPOSITORY', icon: 'terminal' },
  secondaryButton = { text: 'JOIN SIGNAL' },
  version = 'ver_1.0.4_cypher_stable',
  className,
}: CTAProps) {
  const { base, card, icon: iconClass, title: titleClass, description: descriptionClass, buttons, version: versionClass } = cta();

  return (
    <section className={cn(base(), className)}>
      <div className={card()}>
        <span className={`material-symbols-outlined ${iconClass()}`}>{icon}</span>
        <h2 className={titleClass()}>{title}</h2>
        <p className={descriptionClass()}>{description}</p>
        <div className={buttons()}>
          <Button variant="primary" size="lg" href={primaryButton.href}>
            {primaryButton.icon && <span className="material-symbols-outlined text-sm">{primaryButton.icon}</span>}
            {primaryButton.text}
          </Button>
          <Button variant="outline" size="lg" href={secondaryButton.href}>
            {secondaryButton.text}
          </Button>
        </div>
        <div className={versionClass()}>{version}</div>
      </div>
    </section>
  );
}
