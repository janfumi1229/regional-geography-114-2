// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://janfumi12229.github.io/regional-geography-114-2',
  base: '/regional-geography-114-2/',
  vite: {
    plugins: [tailwindcss()],
  },
});
