import { useDark, useToggle } from '@vueuse/core'

// 控制界面
export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export const bgThemeColor = ref<number[]>([])
