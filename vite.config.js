import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {
      // if you have a dev server to access, set the proxy here
      '/api': 'http://localhost:12345/api',
    },
  },
})
