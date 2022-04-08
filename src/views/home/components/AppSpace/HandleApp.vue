<template>
  <div
    :data-id="app.key"
    class="handleApp"
    :class="app.size"
    @click.right.prevent="showContextmenu"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IApp } from '@/types/app.type'

defineProps<{
  app: IApp
}>()

const showContextmenu = (e) => {
  console.log(e)
}
</script>

<style scoped>

</style>
