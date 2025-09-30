import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/My-React-App/"
  plugins: [react()],
  server: {
    port: 3000,           // Optional: change dev server port
    open: true,           // Optional: auto-open in browser
  },
  resolve: {
    alias: {
      '@': '/src',        // Optional: use @ as alias for /src folder
    },
  },
});