import type { RouteRecordRaw } from 'vue-router'
import router from '@/router'

/**
 * 加载app中配置的路由
 * 默认主路由为 app 的 key
 * @param app
 */
export const loadAppRoutes = (routes: RouteRecordRaw[], basePath = 'home') => {
  routes.forEach((route) => {
    router.addRoute(basePath, route)
  })
}

export const removeRoutes = (routerName: string) => {
  router.removeRoute(routerName)
}
