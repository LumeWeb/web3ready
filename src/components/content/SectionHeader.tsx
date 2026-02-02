import { tv, cn, type VariantProps } from 'tailwind-variants';

const sectionHeader = tv({
  base: 'mb-12',
});

export interface SectionHeaderProps extends VariantProps<typeof sectionHeader> {
  title: string;
  description?: string;
  showDivider?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  showDivider = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={cn(sectionHeader(), className)}>
      <h2 className="font-mono text-primary text-xl md:text-2xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-white/70 font-light mb-6">
          {description}
        </p>
      )}
      {showDivider && <div className="h-px w-full bg-primary/20"></div>}
    </div>
  );
}
