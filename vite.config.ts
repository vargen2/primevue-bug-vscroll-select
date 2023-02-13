import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  plugins: [vue()]
})
