/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss(),
  base: './'
  ],
  server: {
    host: true,     // allow LAN/0.0.0.0 access
    port: 5173,     // fixed port
    strictPort: true, // if 5173 is taken, don't auto-switch
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.ngrok-free.app',   // allow ngrok tunnel
      '.loca.lt',          // allow localtunnel
      '.trycloudflare.com' // allow cloudflare tunnel
    ]
  }
})
