import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
    build: {
        cssCodeSplit: true,
        rollupOptions: {
          input: {
            'backend': path.resolve(__dirname, './src/backend/index.ts'),
            'frontend': path.resolve(__dirname, './src/frontend/index.ts')
          },
          output: {
            dir: './dist',
            entryFileNames: `[name].js`,
          }
        }
    }
})