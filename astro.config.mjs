import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isCustomDomain = !!process.env.CUSTOM_DOMAIN;

export default defineConfig({
  site: isCustomDomain
    ? 'https://pittsburghrecordersociety.org'
    : 'https://pittsburgh-recorder-society.github.io',
  base: isCustomDomain ? '/' : '/pittsburghrecordersociety.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
