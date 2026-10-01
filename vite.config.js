import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' makes the built site work on GitHub Pages under any repo name
export default defineConfig({
  plugins: [vue()],
  base: './',
})
