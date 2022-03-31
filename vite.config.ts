/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import fs from 'fs-extra'
import matter from 'gray-matter'
import Prism from 'markdown-it-prism'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  base: '/my-site/',
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://192.168.0.184:3000/',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      script: {
        refSugar: true,
      },
    }),
    Markdown({
      wrapperComponent: 'post',
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        md.use(Prism)
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    WindiCSS(),
    Pages({
      dirs: [
        { dir: 'src/posts', baseRoute: 'posts' },
      ],
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        if (!path.includes('projects.md')) {
          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        return route
      },
    }),

  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
})
