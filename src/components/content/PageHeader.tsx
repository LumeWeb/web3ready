import { tv, cn, type VariantProps } from 'tailwind-variants';

const pageHeader = tv({
  base: 'flex flex-col gap-3',
});

export interface PageHeaderProps extends VariantProps<typeof pageHeader> {
  title: string;
  subtitle?: string;
  showDivider?: boolean;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  showDivider = true,
  className = '',
}: PageHeaderProps) {
  return (
    <div className={cn(pageHeader(), className)}>
      <h1 className="text-primary font-mono text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase">
        {title}
      </h1>
      {subtitle && (
        <p className="text-cyan text-lg font-medium leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
      {showDivider && <div className="h-px w-full bg-primary/30"></div>}
    </div>
  );
}
