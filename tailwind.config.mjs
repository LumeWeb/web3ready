/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4A017',
          light: '#ec5b13',
          dark: '#de980d',
        },
        cyan: {
          DEFAULT: '#4A9E9E',
          accent: '#4A9E9E',
          muted: '#4A9E9E',
        },
        background: {
          light: '#f8f7f5',
          dark: '#0A0A0A',
          DEFAULT: '#0A0A0A',
        },
        terminal: {
          border: '#1A1A1A',
          DEFAULT: '#1A1A1A',
        },
        red: {
          danger: '#E53935',
        },
        body: {
          gray: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        full: '0.75rem',
      },
      backgroundImage: {
        'noise-pattern': 'url(https://www.transparenttextures.com/patterns/carbon-fibre.png)',
      },
      animation: {
        blink: 'blink 1.2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
