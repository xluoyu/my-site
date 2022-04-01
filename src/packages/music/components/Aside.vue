<template>
  <aside
    class="aside border-r border-gray-500 border-opacity-20"
    :style="hideAside"
  >
    左侧菜单栏
  </aside>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

const { dialogWidth } = inject<{ dialogWidth: Ref<number> }>('appLayout')!
const hideAside = computed(() => {
  return dialogWidth.value > 1000 ? '' : 'width: 0;'
})
</script>

<style scoped>
.aside{
  overflow: hidden;
  transition: width .3s;
  width: 200px;
}
</style>
