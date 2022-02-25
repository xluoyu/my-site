import {createRouter, createWebHashHistory} from 'vue-router'
import baseRouter from './baseRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRouter,
  scrollBehavior: () => ({
    top: 0
  }),
})

export default router