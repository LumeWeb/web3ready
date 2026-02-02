import { tv, cn } from 'tailwind-variants';
import { Button } from '@/components/ui/button';
import { footerLinks } from '@/config/navigation';

const footer = tv({
  slots: {
    base: 'w-full border-t border-primary/10 bg-black py-12 px-6 md:px-20 lg:px-40',
    container: 'max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8',
    left: 'flex items-center gap-4 text-primary/60',
    center: 'flex gap-8 font-mono text-[10px] text-gray-500 uppercase',
    right: 'text-[10px] font-mono text-gray-600',
    icon: 'material-symbols-outlined',
  },
});

export function Footer() {
  const { base, container, left, center, right, icon } = footer();

  return (
    <footer className={base()}>
      <div className={container()}>
        <div className={left()}>
          <span className={`${icon()}`}>lock</span>
          <span className="font-mono text-xs uppercase tracking-[0.3em]">
            This is open source.
          </span>
        </div>

        <div className={center()}>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={right()}>
          <span>2026</span>
          <span className="mx-2">·</span>
          <a
            className="hover:text-primary transition-colors"
            href="https://lumeweb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Lume project
          </a>
        </div>
      </div>
    </footer>
  );
}
