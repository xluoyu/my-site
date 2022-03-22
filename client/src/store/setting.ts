import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'

export const useSettingStore = defineStore('setting', () => {
  // 界面主题
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
})
