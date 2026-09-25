import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  vite: {
    optimizeDeps: {
      noDiscovery: true,
      exclude: ['aria-query', 'axobject-query'],
    },
  },
});
