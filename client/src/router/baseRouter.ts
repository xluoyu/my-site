import { RouteRecordRaw } from 'vue-router'
import routes from 'virtual:generated-pages'

const baseRouter:RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/docs',
    component: () => import('@/views/docs/index.vue')
  },
  {
    path: '/todo',
    component: () => import('@/views/todo.vue')
  },
  ...routes
]

export default baseRouter