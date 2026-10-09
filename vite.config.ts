import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

// imagetools skalar och komprimerar bilder vid bygget.
// Se Picture.tsx för vilka storlekar och vilket format som begärs (WebP, max 1600 px).
export default defineConfig({
  plugins: [react(), imagetools()],
})
