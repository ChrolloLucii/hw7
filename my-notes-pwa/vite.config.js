import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Заметки',
        short_name: 'Заметки',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1976d2',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
          src: 'icons/icon-120.png',
          sizes: '120x120',
          type: 'image/png'
          },
          {
          src: 'icons/icon-96.png',
          sizes: '96x96',
          type: 'image/png'
          },
          {
          src: 'icons/icon-32.png',
          sizes: '32x32',
          type: 'image/png'
          },
          {
          src: 'icons/icon-16.png',
          sizes: '16x16',
          type: 'image/png'
          },
          
        ]
      }
    })
  ]
});