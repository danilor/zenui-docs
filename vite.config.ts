import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/zenui-docs',
  build:{
    sourcemap: true,
    emptyOutDir: true,
    outDir:'./docs'
  }
})
