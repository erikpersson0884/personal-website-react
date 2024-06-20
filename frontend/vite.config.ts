import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: parseInt(process.env.PORT ?? '3001'),
  },
  //change port for production
  preview: {
    port: 3001,
  },
  plugins: [react()],
})
