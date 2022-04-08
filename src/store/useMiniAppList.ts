import type { IApp } from '@/types/app.type'
export const miniAppList = ref<IApp[]>([])

// 添加miniApp
export function addApp(app: IApp) {
  if (!miniAppList.value.includes(app)) {
    miniAppList.value.push(app)
  }
}

// 移除miniApp
export function removeApp(key: IApp['key']) {
  miniAppList.value.splice(miniAppList.value.findIndex(e => e.key === key), 1)
}
