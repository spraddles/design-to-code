import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  build: {
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        'backend': path.resolve(__dirname, './src/backend/index.ts'),
      },
      output: {
        dir: './dist',
        entryFileNames: `[name].js`,
      }
    }
  }
})