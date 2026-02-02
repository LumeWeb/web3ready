import { tv, cn, type VariantProps } from 'tailwind-variants';
import { GITHUB_URL } from '@/config/navigation';

const cc0Notice = tv({
  base: 'p-6 border border-terminal/50 bg-terminal/20 rounded-lg',
});

export interface CC0NoticeProps extends VariantProps<typeof cc0Notice> {
  githubUrl?: string;
  className?: string;
}

export function CC0Notice({
  githubUrl = GITHUB_URL,
  className = '',
}: CC0NoticeProps) {
  return (
    <div className={cn(cc0Notice(), className)}>
      <p className="font-mono text-slate-500 text-sm">
        Released under CC0.{' '}
        <a
          className="text-cyan hover:text-primary transition-colors"
          href={githubUrl}
        >
          View on GitHub
        </a>
        .
      </p>
    </div>
  );
}
