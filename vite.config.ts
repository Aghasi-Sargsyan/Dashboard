import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      public: path.resolve(__dirname, './public/'),
      pages: path.resolve(__dirname, './src/pages'),
      components: path.resolve(__dirname, './src/components/'),
      styles: path.resolve(__dirname, './src/styles/'),
      utils: path.resolve(__dirname, './src/utils/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      features: path.resolve(__dirname, './src/features/'),
      services: path.resolve(__dirname, './src/services/'),
      assets: path.resolve(__dirname, './src/assets/'),
      types: path.resolve(__dirname, './src/types/'),
      layouts: path.resolve(__dirname, './src/layouts/'),
    },
  },
});
