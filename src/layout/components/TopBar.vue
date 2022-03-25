<template>
  <div class="topbar px-2">
    <div class="align-center" />
    <div class="absolute mx-auto -left-50px right-0 max-w-1/2">
      <MiniAppSpace v-if="route.name == 'home'" />
      <Search v-if="route?.matched[0]?.name == 'posts-main'" />
    </div>
    <div class="align-center text-$theme-color text-lg ">
      <el-icon
        class="cursor-pointer mx-4"
        @click="toggleDark()"
      >
        <Moon v-if="isDark" />
        <Sunny v-else />
      </el-icon>
      <Weather />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import Weather from './Weather.vue'
import Search from './Search.vue'
import MiniAppSpace from '@/views/home/components/MiniAppSpace.vue'
import { useSettingStore } from '@/store/useSetting'
const route = useRoute()
const setting = useSettingStore()
const { toggleDark } = setting
const { isDark } = storeToRefs(setting)

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
