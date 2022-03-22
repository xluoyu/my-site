<template>
  <div class="miniAppSpace">
    <div
      v-for="(item, index) in list"
      :key="item.key"
      class="app"
      :class="{'status1': outCount === index, 'status2': outCount === index - 1 || outCount === index + 1}"
      @mouseover="mouseoverItem(index)"
      @mouseout="mouseoutItem()"
      @click="openApp(item)"
    >
      <img
        :src="item.icon"
        :title="item.name"
        class="w-4 h-4"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMiniAppListStore } from '@/store/miniAppList'
import { useAppLayoutStore } from '@/store/appLayout'

const { openApp } = useAppLayoutStore()
const miniAppList = useMiniAppListStore()
const { list } = storeToRefs(miniAppList)

const outCount = ref<number | null>(null)

const mouseoverItem = (index: number) => {
  outCount.value = index
}
const mouseoutItem = () => {
  outCount.value = null
}
</script>

<style lang="less" scoped>
.miniAppSpace {
  display: flex;
  justify-content:center;
  max-width: 50vw;
  .app {
    cursor: pointer;
    padding: 0 8px;
    transition: all 0.2s;
    img {
      border-radius: 4px;
    }
    &.status1 {
      margin: 0 8px;
      transform: scale(3) translateY(6px);
    }
    &.status2 {
      margin: 0 6px;
      transform: scale(2) translateY(4px);
    }
  }
}
</style>
