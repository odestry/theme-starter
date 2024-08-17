import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';

export default defineConfig({
  plugins: [
    shopify({
      additionalEntrypoints: ['entry.theme.js'],
      snippetFile: 'entry.liquid'
    }),
  ],
  build: {
    emptyOutDir: false
  }
});
