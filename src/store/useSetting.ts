import { useDark, useToggle } from '@vueuse/core'

export const useSettingStore = (() => {
  // 界面主题
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
})()
