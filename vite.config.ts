import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // 改为根路径
  build: {
    outDir: "docs"
  }
})

