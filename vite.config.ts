import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/js-dom-1/', 
  plugins: [
    tailwindcss(),
  ],
})
