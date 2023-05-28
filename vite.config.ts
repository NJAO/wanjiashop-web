import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),AutoImport({
    dts:true,
    include:[/\.[tj]sx?$/, /\.vue$/],
    imports: [
      'vue',
      'vue-router',
      {
        '@vueuse/core': [
          // named imports
          'useMouse', // import { useMouse } from '@vueuse/core',
          // alias
          ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
        ],
        axios: [
          // default imports
          ['default', 'axios'] // import { default as axios } from 'axios',
        ]
      }
    ],
    resolvers:[],
    eslintrc: {
      enabled: true
    }
  })],
  resolve: {
    alias: {
      "@": resolve('./src')
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData:'@import "@/assets/scss/global.scss";'
      }
    }
  }
})
