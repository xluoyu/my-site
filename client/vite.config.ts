import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://192.168.0.184:3000/',
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      script:{
        refSugar:true
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    WindiCSS(),
    Markdown(),
    Pages({
      dirs: [
        { dir: 'src/posts', baseRoute: 'posts' },
      ],
      extensions: ['vue', 'md'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  }
})
