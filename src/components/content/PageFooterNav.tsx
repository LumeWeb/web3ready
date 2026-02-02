import { tv, cn, type VariantProps } from 'tailwind-variants';

export const LINK_DIRECTION = {
  FORWARD: 'forward' as const,
  BACKWARD: 'backward' as const,
} as const;

export type LinkDirection = (typeof LINK_DIRECTION)[keyof typeof LINK_DIRECTION];

const pageFooterNav = tv({
  base: 'flex items-center justify-between py-20 mt-20 border-t border-terminal',
});

export interface NavLink {
  href: string;
  text: string;
  variant?: 'default' | 'primary' | 'cyan';
  direction?: LinkDirection;
}

export interface PageFooterNavProps extends VariantProps<typeof pageFooterNav> {
  backLink?: NavLink;
  forwardLinks?: NavLink[];
  className?: string;
}

export function PageFooterNav({
  backLink,
  forwardLinks = [],
  className = '',
}: PageFooterNavProps) {
  const getLinkClass = (variant: NavLink['variant'] = 'default') => {
    const variants = {
      default: 'text-slate-500 hover:text-cyan',
      primary: 'text-primary hover:text-white',
      cyan: 'text-cyan hover:text-primary',
    };
    return `font-mono ${variants[variant]} transition-colors text-sm`;
  };

  return (
    <footer className={cn(pageFooterNav(), className)}>
      {backLink && (
        <a className={getLinkClass(backLink.variant)} href={backLink.href}>
          {backLink.direction === LINK_DIRECTION.FORWARD ? `[${backLink.text} →]` : `[← ${backLink.text}]`}
        </a>
      )}
      <div className="flex gap-4">
        {forwardLinks.map((link, index) => (
          <a
            key={index}
            className={getLinkClass(link.variant)}
            href={link.href}
          >
            {link.direction === LINK_DIRECTION.BACKWARD ? `[← ${link.text}]` : `[${link.text} →]`}
          </a>
        ))}
      </div>
    </footer>
  );
}
