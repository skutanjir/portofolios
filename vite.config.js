import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // Prevents source code from being visible in DevTools
    minify: 'esbuild', // Ensures strict minification
    target: 'esnext',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs
        drop_debugger: true, // Removes debugger statements
      },
    },
  },
})
