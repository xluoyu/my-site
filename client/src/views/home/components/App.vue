<template>
  <!-- 普通app -->
  <template v-if="app.type === IAppType.App">
    <div
      class="app"
      @click="openApp(app)"
    >
      <img :src="app.icon">
      <p>{{ app.name }}</p>
    </div>
  </template>
  <!-- 小工具 -->
  <template v-if="app.type === IAppType.Tool">
    <div
      class="app"
      @click="openApp(app)"
    >
      <img :src="app.icon">
      <p>{{ app.name }}</p>
    </div>
  </template>
  <!-- 小工具 -->
  <template v-if="app.type === IAppType.AppArray">
    <div
      class="app"
      @click="openApp(app)"
    >
      <img :src="app.icon">
      <p>{{ app.name }}</p>
    </div>
  </template>
</template>

<script setup lang="ts">
import type { IApp } from '@/types/app.type'
import { IAppType } from '@/types/app.type'
import { useAppLayoutStore } from '@/store/appLayout'
defineProps<{
  app: IApp
}>()

const { openApp } = useAppLayoutStore()
</script>

<style lang="less" scoped>
</style>
