<template>
  <div class="topbar px-2">
    <div class="align-center" />
    <div class="absolute mx-auto -left-50px right-0 max-w-1/2">
      <MiniAppSpace v-if="route.name == 'home'" />
    </div>
    <div class="align-center text-$theme-color text-lg ">
      <el-icon
        class="cursor-pointer mx-4"
        @click="toggleDark()"
      >
        <Moon v-if="isDark" />
        <Sunny v-else />
      </el-icon>
      <div id="he-plugin-simple" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { addScript } from '@/utils'
import MiniAppSpace from '@/views/home/components/MiniAppSpace.vue'
import { useSettingStore } from '@/store/setting'
const route = useRoute()

const setting = useSettingStore()
const { toggleDark } = setting
const { isDark } = storeToRefs(setting)

onMounted(() => {
  window.WIDGET = {
    CONFIG: {
      modules: '01234',
      background: '1',
      tmpColor: 'FFFFFF',
      tmpSize: '12',
      cityColor: 'FFFFFF',
      citySize: '12',
      aqiColor: 'FFFFFF',
      aqiSize: '12',
      weatherIconSize: '12',
      alertIconSize: '12',
      padding: '2px 4px 2px 4px',
      shadow: '1',
      language: 'zh',
      borderRadius: '6',
      fixed: 'false',
      vertical: 'center',
      horizontal: 'center',
      key: '546b02f49cd2408199e9cf6b3ec1e5c7',
    },
  }
  addScript('https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0')
})
</script>

<style lang="less" scoped>
.topbar{
  background: rgba(255,255,255,.6);
  box-sizing: border-box;
  margin-left: var(--aside-width);
  height: var(--topbar-height);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  position: relative;
}
.dark .topbar{
  background: rgba(36, 36, 36, 0.6);
}
</style>
