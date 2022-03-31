<template>
  <!-- 普通app -->
  <div
    class="app"
    @click="openApp(app)"
  >
    <div class="app-space">
      <template v-if="app.type == IAppType.App">
        <img :src="app.icon">
      </template>
    </div>
    <p>{{ app.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IApp } from '@/types/app.type'
import { IAppType } from '@/types/app.type'
import { useAppLayoutStore } from '@/store/useAppLayout'
defineProps<{
  app: IApp
}>()

const { openApp } = useAppLayoutStore
</script>

<style lang="less" scoped>
</style>
