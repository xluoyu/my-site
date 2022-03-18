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
    path: '/posts',
    name: 'posts-main',
    component: () => import('@/views/post/layout.vue'),
    children: [
      {path: '', component: () => import('@/views/post/index.vue') },
      ...routes
    ]
  },
  {
    path: '/todo',
    component: () => import('@/views/todo.vue')
  },
]

export default baseRouter