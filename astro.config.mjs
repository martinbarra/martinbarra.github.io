// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://martinbarra.github.io',
  base: '/',
  outDir: './dist',
  build: {
    format: 'directory'
  }
});