import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dattebayo-api.onrender.com/characters', // Cambia esto a tu URL de la API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Esto elimina '/api' de la ruta
      },
    },
  },
});
