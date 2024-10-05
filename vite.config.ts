import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Add this import


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
    alias: {
      '@components': '/src/components',
      '@views': '/src/views',
      '@/lib': '/src/lib', 
    },
  },
  plugins: [react()],
})
