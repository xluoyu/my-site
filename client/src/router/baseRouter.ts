import { RouteRecordRaw } from 'vue-router'

const baseRouter:RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/docs',
    component: () => import('@/views/docs/index.vue')
  },
  {
    path: '/todo',
    component: () => import('@/views/todo.vue')
  },
]

export default baseRouter