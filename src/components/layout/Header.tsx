import { tv, cn } from 'tailwind-variants';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { navigation, GITHUB_URL, type NavItem } from '@/config/navigation';

const header = tv({
  slots: {
    base: 'sticky top-0 z-40 w-full border-b border-primary/20 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 lg:px-40 py-4',
    container: 'max-w-[1200px] mx-auto flex items-center justify-between',
    logo: 'flex items-center gap-3 text-primary',
    logoText: 'text-xl font-bold tracking-tighter font-mono uppercase',
    nav: 'hidden md:flex items-center gap-10',
    navLink: 'text-xs font-mono uppercase tracking-widest hover:text-primary transition-colors',
    navLinkActive: 'text-primary font-bold border-b-2 border-primary pb-1',
    button: 'bg-primary text-background-dark px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm',
    mobileMenu: 'md:hidden text-primary',
  },
});

export interface HeaderProps {
  pathname: string;
}

function isActive(pathname: string, href: string): boolean {
  // Handle root path - both / and /manifesto should be active
  if (href === '/') {
    return pathname === '/' || pathname === '/manifesto';
  }
  return pathname === href || (href !== '/' && pathname.startsWith(href + '/'));
}

export function Header({ pathname }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { base, container, logo, logoText, nav, navLink, navLinkActive, button, mobileMenu } = header();

  const navItems: NavItem[] = navigation;

  return (
    <header className={base()}>
      <div className={container()}>
        <div className={logo()}>
          <span className="material-symbols-outlined text-3xl">key_visualizer</span>
          <a href="/" className={logoText()}>
            <span className="font-mono text-primary">{'>'}</span> <span className="hover:animate-blink">_</span> web3ready.org
          </a>
        </div>

        <nav className={nav()}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(navLink(), isActive(pathname, item.href) && navLinkActive())}
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" size="sm" className={button()} href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            CHALLENGE THE CODE
          </Button>
        </nav>

        <button
          className={mobileMenu()}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-background-dark/95 border-t border-primary/20">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(navLink(), isActive(pathname, item.href) && navLinkActive())}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" className={button()} href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              CHALLENGE THE CODE
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}