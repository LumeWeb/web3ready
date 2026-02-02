import { tv, cn, type VariantProps } from 'tailwind-variants';

const card = tv({
  base: 'rounded-sm',
  variants: {
    variant: {
      terminal: 'terminal-border bg-primary/5',
      dark: 'bg-black border border-cyan/30 shadow-[0_0_15px_rgba(74,158,158,0.1)]',
      primary: 'bg-black border border-primary/30 shadow-[0_0_15px_rgba(212,160,23,0.1)]',
      gradient: 'terminal-border bg-gradient-to-b from-primary/5 to-transparent',
      danger: 'bg-red-danger/3 border-l-4 border-l-red-danger',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8 md:p-12',
    },
  },
  defaultVariants: {
    variant: 'terminal',
    padding: 'md',
  },
});

export interface CardProps extends VariantProps<typeof card> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ variant, padding, children, className }: CardProps) {
  return (
    <div className={cn(card({ variant, padding }), className)}>
      {children}
    </div>
  );
}
