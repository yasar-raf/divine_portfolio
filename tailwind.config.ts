import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF7',
        ink: '#111111',
        muted: '#5C5C57',
        rule: '#E6E2DA',
        sienna: {
          DEFAULT: '#C2410C',
          soft: '#E8743F',
          deep: '#9A3209',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 9vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        stat: ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        prose: '68ch',
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
