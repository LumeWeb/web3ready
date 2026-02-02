import { tv, cn, type VariantProps } from 'tailwind-variants';
import { CreditItem, type Credit } from './CreditItem';

const creditsSection = tv({
  base: 'space-y-4 text-white/70 font-light',
});

export interface CreditsSectionProps extends VariantProps<typeof creditsSection> {
  credits: Credit[];
  className?: string;
}

export function CreditsSection({ credits, className = '' }: CreditsSectionProps) {
  return (
    <section className={cn(creditsSection(), className)}>
      {credits.map((credit, index) => (
        <CreditItem key={index} credit={credit} />
      ))}
    </section>
  );
}

export type { Credit };

