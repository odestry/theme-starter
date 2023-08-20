import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./**/*.{liquid,json,js}'],
  theme: {
    minHeight: {
      screen: 'var(--screen-height, 100vh)'
    }
  },
  plugins: []
} satisfies Config
