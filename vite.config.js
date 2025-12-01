import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/SER225-Project-Website/'
    : '/',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  esbuild: {
    loader: 'ts',       // ensures .ts files are parsed correctly
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    target: 'esnext',   // make sure import.meta is supported
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
