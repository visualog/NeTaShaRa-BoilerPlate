import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--radix-gray-6)',
        input: 'var(--radix-gray-7)',
        ring: 'var(--radix-blue-8)',
        background: 'var(--radix-gray-1)',
        foreground: 'var(--radix-gray-12)',
        primary: {
          DEFAULT: 'var(--radix-blue-9)',
          foreground: 'white',
        },
        secondary: {
          DEFAULT: 'var(--radix-slate-9)',
          foreground: 'white',
        },
        destructive: {
          DEFAULT: 'var(--radix-red-9)',
          foreground: 'white',
        },
        muted: {
          DEFAULT: 'var(--radix-gray-3)',
          foreground: 'var(--radix-gray-11)',
        },
        accent: {
          DEFAULT: 'var(--radix-violet-9)',
          foreground: 'white',
        },
      },
      borderRadius: {
        lg: 'var(--radius-3)',
        md: 'var(--radius-2)',
        sm: 'var(--radius-1)',
      },
      spacing: {
        xs: 'var(--space-1)',
        sm: 'var(--space-2)',
        md: 'var(--space-3)',
        lg: 'var(--space-4)',
        xl: 'var(--space-5)',
      },
      fontSize: {
        xs: 'var(--font-size-1)',
        sm: 'var(--font-size-2)',
        base: 'var(--font-size-3)',
        lg: 'var(--font-size-4)',
        xl: 'var(--font-size-5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-radix'),
    require('tailwindcss-radix-colors-plugin')({
      include: ['gray', 'blue', 'red', 'green', 'amber', 'slate', 'violet'],
      dark: true,
      cssVars: true,
    }),
  ],
};

export default config;
