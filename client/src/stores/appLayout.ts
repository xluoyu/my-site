import { useToggle } from '@vueuse/core'
import { IApp, IOpenType } from '@/types/app.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useMiniAppListStore } from './miniAppList'
import { ElNotification } from 'element-plus'

/**
 * app展示模块
 */
export const useAppLayoutStore = defineStore('appLayout', () => {
  const [showAppLayout, toggleAppLayout] = useToggle(false)
  const [isFullscreen, toggleIsFullscreen] = useToggle(false)
  const curApp = ref<IApp | null>()

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
    curApp.value = null
    toggleAppLayout()
  }

  // 点击最小化
  const minimize = () => {
    const { addApp } = useMiniAppListStore()
    toggleAppLayout()
    addApp(curApp.value as IApp)
  }

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
    window.open(curApp.value?.pageUrl)
  }

  return {
    curApp,
    openApp,
    closeApp,
    minimize,
    openWindow,
    showAppLayout,
    isFullscreen,
    toggleIsFullscreen
  }
})