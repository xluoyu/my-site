<template>
  <div
    ref="curApp"
    :data-id="userApp.key"
    class="handleApp"
    :class="userApp.size"
    @click.right.prevent="showContextmenu"
  >
    <div
      class="app relative"
    >
      <slot />

      <div
        v-if="userApp.key === 'appGroup'"
        class="w-2 h-2 absolute bottom-0 right-10px bg-light-600"
        style="cursor: nw-resize"
        @mouseenter="addNoDarg"
        @mouseleave="removeNoDarg"
        @mousedown.stop="resizeStart"
      />
    </div>
    <p>{{ userApp.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IUserAppOptionsWithApp } from '@/composables/useInfo'

defineProps<{
  userApp: IUserAppOptionsWithApp
}>()
const curApp = ref<HTMLElement | null>()
const addNoDarg = () => {
  curApp.value!.classList.add('no-drag')
}
const removeNoDarg = () => {
  curApp.value!.classList.remove('no-drag')
}
const resizeStart = (e) => {
  console.log(e)
}

const showContextmenu = (e) => {
  console.log(e)
}
</script>

<style scoped>

</style>
