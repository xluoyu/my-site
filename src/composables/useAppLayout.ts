import { useToggle } from '@vueuse/core'
import { ElNotification } from 'element-plus'
import { addApp, removeApp } from './useMiniAppList'
import { IOpenType } from '@/types/app.type'
import type { IApp } from '@/types/app.type'
/**
 * app展示模块
 */
// export const useAppLayoutStore = (() => {
const [showAppLayout, toggleAppLayout] = useToggle(false)
const [isFullscreen, toggleIsFullscreen] = useToggle(false)

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

export {
  curApp,
  openApp,
  closeApp,
  minimize,
  openWindow,
  showAppLayout,
  isFullscreen,
  toggleIsFullscreen,
}
// })()
