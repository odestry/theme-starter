import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import cleanup from '@by-association-only/vite-plugin-shopify-clean'

export default defineConfig({
  plugins: [
    shopify({
      additionalEntrypoints: ['entry.theme.js'],
      snippetFile: 'entry.liquid'
    }),
    cleanup()
  ],
  build: {
    emptyOutDir: false
  }
});
