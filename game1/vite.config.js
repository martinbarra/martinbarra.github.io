import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Esto es importante para GitHub Pages
  build: {
    outDir: 'dist', // Especificamos que la salida debe ir a la carpeta "dist"
    assetsDir: 'assets', // Los archivos estáticos, como imágenes y otros recursos, estarán dentro de "dist/assets"
    rollupOptions: {
      input: './index.html', // Aseguramos que Vite utilice el index.html correcto
    },
  },
});
