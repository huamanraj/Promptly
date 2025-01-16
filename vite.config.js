import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import pages from 'vite-plugin-pages';
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    pages(),
  ],
})
