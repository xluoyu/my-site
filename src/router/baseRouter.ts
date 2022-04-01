import type { RouteRecordRaw } from 'vue-router'
import routes from 'virtual:generated-pages'

const baseRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  {
    path: '/posts',
    name: 'posts-main',
    component: () => import('@/views/post/layout.vue'),
    children: [
      { path: '', name: 'posts', component: () => import('@/views/post/index.vue') },
      ...routes,
    ],
  },
  {
    path: '/appTest/:appName',
    name: 'appTest',
    component: () => import('@/views/appTest/index.vue'),
  },

]

export default baseRouter
