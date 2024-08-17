import { defineConfig } from 'vite';
import path from 'path'
import shopify from 'vite-plugin-shopify';
import cleanup from '@by-association-only/vite-plugin-shopify-clean'

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
    },
  },
  plugins: [
    shopify({
      additionalEntrypoints: ['entry.theme.js'],
      snippetFile: 'entry.liquid'
    }),
    cleanup()
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].min.js',
        chunkFileNames: '[name].[hash].min.js',
        assetFileNames: '[name].[hash].min[extname]'
      }
    }
  }
});
