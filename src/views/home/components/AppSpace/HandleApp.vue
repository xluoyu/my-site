<template>
  <div
    :data-id="app.key"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IApp } from '@/types/app.type'

defineProps<{
  app: IApp
}>()
</script>

<style scoped>

</style>
