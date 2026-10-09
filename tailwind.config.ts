import type { Config } from 'tailwindcss'
import { theme } from './src/content'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: theme.beige,
        cream: theme.cream,
        sand: theme.sand,
        terracotta: theme.terracotta,
        'terracotta-dark': theme.terracottaDark,
        brown: theme.brown,
        'brown-muted': theme.brownMuted,
        line: theme.line,
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
