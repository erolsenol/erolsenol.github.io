import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://erolsenol.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
