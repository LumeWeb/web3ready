import { tv, cn, type VariantProps } from 'tailwind-variants';

const terminal = tv({
  slots: {
    base: 'rounded-sm overflow-hidden border',
    header: 'flex justify-between items-center px-4 py-2 text-[10px] font-mono',
    content: 'p-4 md:p-6 font-mono text-sm leading-relaxed overflow-x-auto',
  },
  variants: {
    variant: {
      primary: {
        base: 'border-primary/30 bg-black',
        header: 'text-primary/50',
        content: 'text-primary/90',
      },
      cyan: {
        base: 'border-cyan/30 bg-black',
        header: 'text-cyan/50',
        content: 'text-cyan/90',
      },
      default: {
        base: 'border-terminal bg-background-dark/40',
        header: 'text-gray-500',
        content: 'text-gray-400',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface TerminalProps extends VariantProps<typeof terminal> {
  title?: string;
  size?: string;
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ variant, title, size, children, className }: TerminalProps) {
  const { base, header, content } = terminal({ variant });

  return (
    <div className={cn(base(), className)}>
      {(title || size) && (
        <div className={header()}>
          {title && <span>{title}</span>}
          {size && <span>{size}</span>}
        </div>
      )}
      <div className={content()}>
        <pre className="whitespace-pre-wrap">{children}</pre>
      </div>
    </div>
  );
}
