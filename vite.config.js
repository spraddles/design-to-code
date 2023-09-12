import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
    build: {
        cssCodeSplit: true,
        rollupOptions: {
          input: {
            'code': path.resolve(__dirname, './src/index.ts')
          },
          output: {
            dir: './dist',
            entryFileNames: `[name].js`,
          }
        }
    }
})