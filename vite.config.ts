import { defineConfig } from "vite"
import { resolve } from "path"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      include: [/\.[tj]sx?$/, /\.vue$/],
      imports: [
        "vue",
        "vue-router",
        {
          "@vueuse/core": [
            // named imports
            "useMouse", // import { useMouse } from '@vueuse/core',
            // alias
            ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
        },
      ],
      resolvers: [AntDesignVueResolver()],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({ importStyle: true, resolveIcons: true }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/global.scss";',
      },
    },
  },
})
