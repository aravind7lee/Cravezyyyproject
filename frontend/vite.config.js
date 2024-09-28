// import { defineConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src
      'context': path.resolve(__dirname, './src/context'), // Alias for context
      '@tests': path.resolve(__dirname, './tests'), // If you have a tests folder
    },
  },
});
