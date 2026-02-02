import { tv, cn, type VariantProps } from 'tailwind-variants';

const section = tv({
  base: 'w-full',
  variants: {
    variant: {
      default: 'max-w-[1200px] mx-auto px-6 md:px-20 lg:px-40 py-20',
      narrow: 'max-w-[720px] mx-auto px-6 py-16 md:py-24',
      medium: 'max-w-[840px] mx-auto px-6 py-16 md:py-24',
      full: 'w-full',
    },
    bordered: {
      true: 'border-t border-primary/10',
      false: '',
    },
    breakout: {
      true: 'max-w-[1400px]',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    bordered: false,
    breakout: false,
  },
});

export interface SectionProps extends VariantProps<typeof section> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ variant, bordered, breakout, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn(section({ variant, bordered, breakout }), className)}>
      {children}
    </section>
  );
}
