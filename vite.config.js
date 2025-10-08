
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: 'all',
    cors: {
      origin: '*',
      credentials: false
    },
    hmr: {
      port: 5000,
      clientPort: 5000
    },
    strictPort: false,
    origin: 'https://ce0a0837-a2d5-4d55-bd50-dfb92f00eb6d-00-nwhj33d1tfuu.sisko.replit.dev'
  },
  publicDir: 'public'
})
