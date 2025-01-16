import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
  },
  server: {
    strictPort: true, // Optional: ensures server uses the specified port
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: setup alias for better imports
    },
  },
});
