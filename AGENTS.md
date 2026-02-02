# AGENTS.md
This file provides guidance to various AI agents when working with code in this repository.

## Project Overview

Web3Ready is a philosophy website rooted in cypherpunk identity. It synthesizes Cypherpunk warnings, Autonomist resonance, and thirty years of evidence to provide a grounded, code-first, anti-hype perspective on real decentralization. The site is built as a static site with Astro, using React for interactive components.

## Architecture

### Core Technology Stack
- **Framework**: Astro 5.x (static site generator with React integration)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with `tailwind-variants` for component variants
- **Package Manager**: pnpm

### Directory Structure
```
src/
├── components/     # UI components (React .tsx and Astro .astro)
│   ├── content/    # Content-specific components (CC0Notice, CreditsSection, etc.)
│   ├── layout/     # Layout components (Header, Footer, MainLayout)
│   ├── manifesto/  # Manifesto-related components (ManifestoStory, ManifestoPrinciples, etc.)
│   ├── sections/   # Section components (Hero, CTA, ManifestoSection, etc.)
│   └── ui/         # Base UI components (Button, Section, Terminal, Table, Card)
├── config/         # Configuration files (navigation.ts with routes)
├── content/        # Content collections and data
│   ├── config.ts   # Zod schemas for manifesto content
│   └── manifests/  # JSON data files (main.json contains all manifesto content)
├── data/           # Data access layer (manifesto.ts fetches from content collections)
├── pages/          # Astro file-based routing
│   ├── index.astro
│   ├── manifesto.astro
│   ├── philosophy.astro
│   ├── building-blocks.astro
│   ├── about.astro
│   ├── cypherpunk-manifesto.astro
│   └── autonomist-manifesto.astro
├── styles/         # Global CSS (global.css with Tailwind imports and custom styles)
└── utils/          # Utility functions (tv.ts for tailwind-variants helpers)
```

### Data Flow
1. Manifesto content is stored in `src/content/manifests/main.json`
2. `src/content/config.ts` defines Zod schemas and exports TypeScript types
3. `src/data/manifesto.ts` provides async getter functions using Astro's `getCollection`
4. Pages (`.astro`) import data getters and pass data to React components
5. React components render the content

### Component Patterns
- **Variant Components**: Use `tailwind-variants` (`tv()`) for variant-based styling
- **Type Exports**: Components export their Props interfaces (e.g., `ButtonProps`, `SectionProps`)
- **Class Composition**: Use `cn()` helper for class merging (from tailwind-variants)
- **Astro Components**: Use `.astro` for static layouts; React `.tsx` for interactive elements

### Path Alias
The project uses `@/` as an alias for `src/`, configured in `astro.config.mjs` and `tsconfig.json`.

## Common Commands

```bash
# Development
pnpm dev          # Start dev server at localhost:4321
pnpm start        # Alias for dev

# Build
pnpm build        # Build for production (output to dist/)
pnpm preview      # Preview production build locally

# Astro CLI
pnpm astro <cmd>  # Run Astro CLI commands

# Dependencies
pnpm install      # Install dependencies
pnpm add <pkg>    # Add a dependency
pnpm add -D <pkg> # Add a dev dependency

# Updates (uses taze)
pnpm taze         # Check for outdated packages and update
```

**Note**: No test framework is currently configured.

## Styling System

### Theme Colors
- **Primary**: `#D4A017` (gold) with light/dark variants
- **Cyan**: `#4A9E9E` (teal accent)
- **Background**: `#0A0A0A` (dark), `#f8f7f5` (light mode, not used)
- **Terminal**: `#1A1A1A` (dark gray)

### Typography
- **Sans**: Inter
- **Mono**: JetBrains Mono
- **Display**: Space Grotesk
- **Icons**: Material Symbols Outlined

### Tailwind Variants Pattern
```typescript
import { tv } from 'tailwind-variants';

const componentName = tv({
  base: 'base classes',
  variants: {
    variant: { primary: '...', secondary: '...' },
    size: { sm: '...', md: '...' },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});
```

## Content Schema

The manifesto data uses Zod for validation with these types:
- `Principle`: { id, title, definition }
- `StorySection`: { id, title, summary, content }
- `ProblemSection`: { id, title, summary, content }
- `PathSection`: { id, title, summary, content }
- `Credit`: { title, year, author, role, url?, useBy? }

## Key Configuration Files

- `astro.config.mjs`: Integrations (React, Sitemap, Tailwind, astro-llms-txt), path aliases, site URL
- `tailwind.config.mjs`: Theme colors, fonts, animations, border radius
- `tsconfig.json`: Path aliases (`@/` → `src/`), extends Astro strict config
- `git-town.toml`: Git workflow configuration (main → develop branch model)
- `taze.config.js`: Dependency update settings (excludes vite, tailcss)

## Development Notes

1. **React vs Astro**: Use React for interactive components; Astro for static layouts and pages
2. **Type Imports**: Import types from `@/content/config` for manifesto data
3. **Class Merging**: Use `cn()` from tailwind-variants when combining classes
4. **No API Routes**: This is a static site; all data comes from the JSON manifest
5. **LLMs Text Generation**: The `astro-llms-txt` integration auto-generates documentation files at `/llms-full.txt` and `/llms-small.txt`