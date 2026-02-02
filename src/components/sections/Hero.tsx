import { tv, cn } from 'tailwind-variants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const hero = tv({
  slots: {
    base: 'w-full max-w-[1200px] px-6 md:px-20 lg:px-40 py-20 lg:py-32',
    title: 'font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter',
    subtitle: 'text-cyan font-mono text-sm md:text-lg max-w-2xl border-l-2 border-cyan pl-4 italic',
    buttons: 'flex flex-wrap gap-4 pt-4',
    cursor: 'animate-blink',
  },
});

export interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButton?: { text: string; href?: string };
  secondaryButton?: { text: string; href?: string };
  className?: string;
}

export function Hero({
  title = '>_ web3ready',
  subtitle = '"The decentralized future is not a product. It is a protocol."',
  primaryButton = { text: 'READ MANIFESTO' },
  secondaryButton = { text: 'VIEW SOURCE' },
  className,
}: HeroProps) {
  const { base, title: titleClass, subtitle: subtitleClass, buttons, cursor } = hero();

  return (
    <section className={cn(base(), className)}>
      <Card variant="terminal" padding="lg" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
        <div className="flex flex-col gap-8 items-start">
          <div className="space-y-4">
            <h1 className={titleClass()}>
              {title}
              <span className={cursor()}>|</span>
            </h1>
            <p className={subtitleClass()}>
              {subtitle}
            </p>
          </div>
          <div className={buttons()}>
            <Button variant="primary" size="md" href={primaryButton.href}>
              {primaryButton.text}
            </Button>
            <Button variant="secondary" size="md" href={secondaryButton.href}>
              {secondaryButton.text}
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
