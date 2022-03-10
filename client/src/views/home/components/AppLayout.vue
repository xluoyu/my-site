<template>
  <el-dialog
    v-model="showAppLayout"
    title="Tips"
    width="70%"
    top="10vh"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    append-to-body
    :show-close="false"
    draggable
    :fullscreen="isFullscreen"
    custom-class="appLayout scrollbar-color"
  >
    <div class="action-bar">
      <div class="action-btn hover:(bg-cyan-600 text-light-50)" @click="isFullscreen = !isFullscreen">
        <el-icon>
          <FullScreen />
        </el-icon>
      </div>
      <div class="action-btn hover:(bg-gray-400 text-light-50)" @click="minimize">
        <el-icon>
          <Minus />
        </el-icon>
      </div>
      <div class="action-btn hover:(bg-red-600 text-light-50)" @click="closeApp">
        <el-icon>
          <Close />
        </el-icon>
      </div>
    </div>

    <div>
      <template v-if="curApp?.openType === IOpenType.Component">
        <component :is="curApp.component"></component>
      </template>
      <template v-if="curApp?.openType === IOpenType.Iframe">
        <iframe :src="curApp.pageUrl" frameborder="0" class="w-full h-$appLayout-height"></iframe>
      </template>
    </div>

  </el-dialog>
</template>

<script setup lang="ts">
  import { useAppLayoutStore } from '@/stores/appLayout'
  import {Close, Minus, FullScreen} from '@element-plus/icons-vue'
  import { storeToRefs } from 'pinia'
  import { IOpenType } from '@/types/app.type'
  const useAppLayout = useAppLayoutStore()
  const { showAppLayout, isFullscreen, curApp } = storeToRefs(useAppLayout)
  const { closeApp, minimize} = useAppLayout


</script>

<style lang="less" scoped>

</style>