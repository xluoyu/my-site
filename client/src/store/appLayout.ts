import { useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ElNotification } from 'element-plus'
import { useMiniAppListStore } from './miniAppList'
import { IOpenType } from '@/types/app.type'
import type { IApp } from '@/types/app.type'
/**
 * app展示模块
 */
export const useAppLayoutStore = defineStore('appLayout', () => {
  const [showAppLayout, toggleAppLayout] = useToggle(false)
  const [isFullscreen, toggleIsFullscreen] = useToggle(false)
  const { addApp, removeApp } = useMiniAppListStore()

  const curApp = ref<IApp | null>()

  const openWindow = () => {
    if (curApp.value?.openType === IOpenType.Component) return
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

  // 打开App
  const openApp = (app: IApp) => {
    switch (app.openType) {
      case IOpenType.Component:
      case IOpenType.Iframe:
      case IOpenType.Qiankun:
        toggleAppLayout()
        curApp.value = app
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
})
