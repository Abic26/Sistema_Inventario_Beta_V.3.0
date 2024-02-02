import {VitePWA} from "vite-plugin-pwa"
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), VitePWA({
      manifest: {
        name: 'FactuInventario_Boutique',
        short_name: 'FactuInventario',
        description: 'Sistema de inventario de facturacion',
        theme_color: '#333',
        icons: [
          {
            src: 'factura.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
