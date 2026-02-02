import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import astroLlmsTxt from '@4hse/astro-llms-txt';
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    astroLlmsTxt({
      title: 'Web3Ready',
      description: 'Understanding decentralization beyond the hype.',
      details: 'Web3Ready is a web3 philosophy site rooted in cypherpunk identity. We synthesize the Cypherpunk warnings, the Autonomist resonance, and thirty years of evidence to provide a grounded, code-first, anti-hype perspective on real decentralization for builders.',
      notes: '- This content is auto-generated from the official source.',
      docSet: [
        {
          title: 'Complete site',
          description: 'The full Web3Ready documentation',
          url: '/llms-full.txt',
          include: ['**'],
          promote: ['index.md'],
        },
        {
          title: 'Small site',
          description: 'Index of key pages',
          url: '/llms-small.txt',
          include: ['**'],
          onlyStructure: true,
          promote: ['index.md'],
        },
      ],
      pageSeparator: '\n\n---\n\n',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  compressHTML: true,
  site: 'https://web3ready.org',
});
