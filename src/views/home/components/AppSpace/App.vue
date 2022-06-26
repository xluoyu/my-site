<template>
  <!-- 普通app -->
  <div class="app-space">
    <template v-if="userApp.size && userApp.app[userApp.size]">
      <component
        :is="userApp.app[userApp.size]"
        :id="userApp.id"
        :apps="userApp.children"
        :name="userApp.name"
      />
    </template>
    <template v-else>
      <div
        class="full"
        @click="openApp(userApp.app)"
      >
        <img
          class="full object-cover"
          :src="userApp.app.icon"
        >
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { openApp } from '@/composables/useAppLayout'
import type { IUserAppOptionsWithApp } from '@/composables/useInfo'
// import { appContextMenu } from '@/composables/useAppContextMenu'

const props = defineProps<{
  userApp: IUserAppOptionsWithApp
}>()
// if (props.userApp.children) {
//   provide('options-children', props.userApp.children)
// }
</script>

<style lang="less" scoped>
</style>
