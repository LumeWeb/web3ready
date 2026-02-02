import { z } from 'zod';

export const GITHUB_URL = 'https://github.com/LumeWeb/web3ready';

export const navItemSchema = z.object({
  href: z.string(),
  label: z.string(),
  view: z.string(),
});

export const footerLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const navigation: z.infer<typeof navItemSchema>[] = [
  { href: '/manifesto', label: 'Manifesto', view: 'manifesto' },
  { href: '/philosophy', label: 'Philosophy', view: 'philosophy' },
  { href: '/building-blocks', label: 'Building Blocks', view: 'building-blocks' },
  { href: '/about', label: 'About', view: 'about' },
];

export const footerLinks: z.infer<typeof footerLinkSchema>[] = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'Discord', href: 'https://discord.gg/5QV3X5J6' },
];

export type NavItem = z.infer<typeof navItemSchema>;
export type FooterLink = z.infer<typeof footerLinkSchema>;
