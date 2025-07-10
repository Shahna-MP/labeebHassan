import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  root: 'src',
  base: mode === 'production' ? '/holly-react/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // 👈 This allows access from mobile devices
    port: 5173, // 👈 You can change this if needed
  },
  plugins: [react()],
}))
