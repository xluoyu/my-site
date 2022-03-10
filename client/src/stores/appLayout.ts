import { useToggle } from '@vueuse/core'
import { IApp, IOpenType } from '@/types/app.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useMiniAppListStore } from './miniAppList'

export const useAppLayoutStore = defineStore('appLayout', () => {
  const [showAppLayout, toggleAppLayout] = useToggle(false)
  const [isFullscreen, toggleIsFullscreen] = useToggle(false)
  const curApp = ref<IApp | null>()

  const openApp = (app: IApp) => {
    switch (app.openType) {
      case IOpenType.Component:
      case IOpenType.Iframe:
      case IOpenType.Qiankun:
        toggleAppLayout()
        curApp.value = app
        break
      default:
        window.open(app.pageUrl)
        break
    }
  }

  const closeApp = () => {
    toggleAppLayout()
    curApp.value = null
  }

  const minimize = () => {
    const { addApp } = useMiniAppListStore()
    toggleAppLayout()
    addApp(curApp.value as IApp)
  }

  return {
    curApp,
    openApp,
    closeApp,
    minimize,
    showAppLayout,
    isFullscreen,
    toggleIsFullscreen
  }
})