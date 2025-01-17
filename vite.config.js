import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/WarRoomFrontend/',
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
  },
  preview: {
    port: 4173,
    // 添加這個配置來處理 history mode 路由
    historyApiFallback: true
  },
  server: {
    // 開發模式也加上
    historyApiFallback: true
  }
})
