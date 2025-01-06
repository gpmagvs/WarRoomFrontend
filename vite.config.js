import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // // 全局引入變數和 mixin
        // additionalData: `
        //   @import "@/assets/styles/variables/index.scss";
        //   @import "@/assets/styles/mixins/index.scss";
        // `
      }
    }
  }
})
