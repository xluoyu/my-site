import { RouteRecordRaw } from 'vue-router'

const baseRouter:RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/todo',
    component: () => import('@/views/todo.vue')
  },
]

export default baseRouter