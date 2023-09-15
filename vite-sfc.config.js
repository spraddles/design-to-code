import { defineConfig } from 'vite'
import path from 'node:path'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    emptyOutDir: false,
    outDir: './dist',
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        'frontend': path.resolve(__dirname, './src/frontend/index.html')
      },
      output: {
        dir: './dist',
        entryFileNames: `[name].js`,
      }
    }
  }
})