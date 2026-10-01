import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base 
export default defineConfig({
  plugins: [vue()],
  base: './',
})
