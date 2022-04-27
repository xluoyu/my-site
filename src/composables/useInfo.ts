import { useLocalStorage } from '@vueuse/core'
import type { IApp } from '@/types/app.type'
import type { userAppOptions } from '@/packages/defaultAppList'
import { defaultApps } from '@/packages/defaultAppList'
import appList from '@/packages'

export const userAppKeyList = useLocalStorage<userAppOptions[]>('userAppList', defaultApps)
export type IUserAppOptionsWithApp = userAppOptions & { app: IApp }
export const userAppList = computed((): IUserAppOptionsWithApp[] => {
  return userAppKeyList.value.map((item) => {
    const app = appList.find(app => app.key === item.key)!
    if (item.children) {
      item.children = item.children.map((child) => {
        const childApp = appList.find(childApp => childApp.key === child.key)!
        return { ...child, app: childApp }
      })
    }
    return { ...item, app }
  })
})
