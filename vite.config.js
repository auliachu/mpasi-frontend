import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '103.150.191.9',
    port: "5001"
  },
  plugins: [react()],
})
