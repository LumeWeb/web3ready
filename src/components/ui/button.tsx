import { tv, type VariantProps } from 'tailwind-variants';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

const button = tv({
  base: 'font-bold uppercase tracking-widest rounded-sm transition-all inline-flex items-center justify-center gap-2',
  variants: {
    variant: {
      primary: 'bg-primary text-background-dark hover:bg-white',
      secondary: 'border border-primary/50 text-primary hover:bg-primary/10',
      outline: 'border border-white/20 text-white hover:bg-white/5',
      ghost: 'text-primary/60 hover:text-primary hover:bg-primary/5',
    },
    size: {
      sm: 'px-4 py-2 text-xs',
      md: 'px-8 py-4 text-sm',
      lg: 'px-10 py-4 text-sm',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href'>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonHTMLAttributes<HTMLButtonElement>>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  href?: string;
}

export function Button({ variant, size, className, children, href, ...props }: ButtonProps) {
  const classes = button({ variant, size, className });

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
