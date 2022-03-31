import type { IApp } from '@/types/app.type'
import AppList from '@/packages'

// 最小化的App
export const useMiniAppListStore = (() => {
  const list = ref<IApp[]>([...AppList])

  const addApp = (app: IApp) => {
    if (!list.value.includes(app)) {
      list.value.push(app)
    }
  }

  const removeApp = (key: IApp['key']) => {
    list.value.splice(list.value.findIndex(e => e.key === key), 1)
  }

  return {
    list,
    addApp,
    removeApp,
  }
})()
