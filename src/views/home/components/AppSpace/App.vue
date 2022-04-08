<template>
  <!-- 普通app -->
  <div
    class="app"
  >
    <div class="app-space">
      <template v-if="app.size && app[app.size]">
        <component :is="app[app.size]" />
      </template>
      <template v-else>
        <div
          class="full"
          @click="openApp(app)"
        >
          <img
            class="full object-cover"
            :src="app.icon"
          >
        </div>
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
