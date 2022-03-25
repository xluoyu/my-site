/**
 * 暴露全局公用的store
 */

import { useAppLayoutStore } from './useAppLayout'
import { useMiniAppListStore } from './useMiniAppList'
import { useSettingStore } from './useSetting'

export const useAppLayout = useAppLayoutStore()
export const useMiniAppList = useMiniAppListStore()
export const useSetting = useSettingStore()
