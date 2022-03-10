import { IApp } from '@/types/app.type'
import { defineStore } from 'pinia'

export const useMiniAppListStore = defineStore('counter', () => {
  const list = ref<IApp[]>([])

  const addApp = (app:IApp) => {
    list.value.push(app)
  }

  const removeApp = (key:IApp['key']) => {
    list.value.splice(list.value.findIndex(e => e.key === key), 1)
  }

  return {
    list,
    addApp,
    removeApp
  }
})