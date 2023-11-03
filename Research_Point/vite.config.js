import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/admin': 'http://localhost:8800',
    },
  },
  plugins: [react()],

})
