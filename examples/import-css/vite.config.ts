import { defineConfig } from 'vite'
import importCss from 'vite-plugin-import-css'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'cjs' ? 'js' : 'mjs'}`,
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['vite'],
    },
  },
  plugins: [importCss()],
})
