// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//       'context': path.resolve(__dirname, 'src/context')  // Correctly set the alias
//     }
//   }
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import StoreContext from 'context/StoreContext';  // Using 'context' alias
import MyComponent from '@/components/MyComponent';  // Using '@' alias
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    StoreContext(),
    MyComponent(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests")
    }
  }
})