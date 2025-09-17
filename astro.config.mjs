// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://martinbarra.github.io',
  base: '/',
  outDir: './dist',
  build: {
    format: 'directory'
  }
});
