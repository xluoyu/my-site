import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ITheme } from '@/types/setting.type'

export const useSettingStore = defineStore('setting', () => {
  // 界面主题
  const theme = ref<ITheme>(ITheme.Light)
  const changeTheme = (target: ITheme) => {
    theme.value = target
  }

  return {
    theme,
    changeTheme,
  }
})
