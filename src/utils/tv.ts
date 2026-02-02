import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Helper function to create Tailwind Variants components
 * This is the main entry point for creating variant-based components
 */
export { tv };

/**
 * Type helper for component props
 */
export type ComponentVariants<T> = VariantProps<T>;

/**
 * Common base styles for terminal-styled components
 */
export const terminalBase = 'font-mono bg-background-dark border border-terminal/50';

/**
 * Common base styles for primary text
 */
export const primaryText = 'text-primary';

/**
 * Common base styles for cyan accent text
 */
export const cyanText = 'text-cyan';
