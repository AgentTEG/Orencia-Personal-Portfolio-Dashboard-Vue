import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],

    // Base path handling:
    // - dev        → localhost
    // - production → GitHub Pages repo name
    base:
      mode === 'production'
        ? '/'
        : '/',
  }
})
