import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/slick-side-menu.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit-element/
    }
  }
})
