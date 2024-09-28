import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  // Include the Vite plugin for React
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),        // Alias '@' points to the 'src' folder
      'context': path.resolve(__dirname, 'src/context')  // Alias 'context' points to the 'src/context' folder
    }
  }
})
