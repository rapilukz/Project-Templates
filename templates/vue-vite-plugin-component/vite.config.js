import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry: resolve(__dirname, "./src/index.js"),
      name: "appName",
      fileName: "app-name",
    },
    rollupOptions:{
      external: ["vue"],
      output:{
        globals: {
          vue: "vue"
        }
      }
    },
  }

})
