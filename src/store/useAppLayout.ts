import { useToggle } from '@vueuse/core'
import { ElNotification } from 'element-plus'
import { useMiniAppListStore } from './useMiniAppList'
import router from '@/router'
import { IOpenType } from '@/types/app.type'
import type { IApp } from '@/types/app.type'
/**
 * app展示模块
 */
export const useAppLayoutStore = (() => {
  const [showAppLayout, toggleAppLayout] = useToggle(false)
  const [isFullscreen, toggleIsFullscreen] = useToggle(false)
  const { addApp, removeApp } = useMiniAppListStore

  const curApp = ref<IApp | null>()

  const openWindow = () => {
    if (curApp.value?.openType === IOpenType.Component || curApp.value?.openType === IOpenType.Router) return
    if (!curApp.value?.pageUrl) {
      ElNotification({
        title: '错误提示',
        message: '当前应用未配置网址',
        type: 'error',
      })
      return
    }
    window.open(curApp.value.pageUrl)
  }

  /**
   * 加载app中配置的路由
   * 默认主路由为 app 的 key
   * @param app
   */
  const loadAppRoutes = async(app: IApp) => {
    if (app.openType === IOpenType.Router) {
      const routes = await app.router().then((res) => {
        return res.default
      })
      routes.forEach((route) => {
        router.addRoute('home', route)
      })
      nextTick(() => {
        router.push(app.key)
      })
    }
  }

  const removeRoute = (app: IApp) => {
    router.removeRoute(app.key)
    router.push('home')
  }

  // 打开App
  const openApp = (app: IApp) => {
    switch (app.openType) {
      case IOpenType.Component:
      case IOpenType.Iframe:
      case IOpenType.Qiankun:
        toggleAppLayout()
        curApp.value = app
        break
      case IOpenType.Router:
        toggleAppLayout()
        curApp.value = app
        loadAppRoutes(app)
        break
      default:
        openWindow()
        break
    }
  }

  // 关闭App
  const closeApp = () => {
    removeApp(curApp.value!.key)
    toggleAppLayout()
    if (curApp.value?.openType === IOpenType.Router) {
      removeRoute(curApp.value)
    }
    curApp.value = null
  }

  // 点击最小化
  const minimize = () => {
    toggleAppLayout()
    addApp(curApp.value as IApp)
  }

  return {
    curApp,
    openApp,
    closeApp,
    minimize,
    openWindow,
    showAppLayout,
    isFullscreen,
    toggleIsFullscreen,
  }
})()
