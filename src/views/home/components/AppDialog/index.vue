<template>
  <el-dialog
    v-model="showAppLayout"
    width="70%"
    top="10vh"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    append-to-body
    :show-close="false"
    draggable
    :fullscreen="isFullscreen"
    custom-class="appLayout theme-bg"
  >
    <template #title>
      <div class="action-bar theme-bg">
        <div class="flex items-center">
          <template v-if="curApp?.openType && curApp.openType !== IOpenType.Component">
            <div
              class="action-btn hover:(bg-cyan-600 text-light-50)"
              title="访问原网站"
              @click="openWindow"
            >
              <el-icon>
                <Promotion />
              </el-icon>
            </div>
            <el-button
              type="text"
              size="small"
              @click="openWindow"
            >
              {{ curApp?.pageUrl }}
            </el-button>
          </template>
          <div
            v-else
            class="text-sm ml-2 text-gray-500"
          >
            {{ curApp?.name }}
          </div>
        </div>
        <div class="flex">
          <div
            class="action-btn hover:(bg-cyan-600 text-light-50)"
            title="浏览器全屏"
            @click="isFullscreen = !isFullscreen"
          >
            <el-icon>
              <FullScreen />
            </el-icon>
          </div>
          <div
            class="action-btn hover:(bg-gray-400 text-light-50)"
            title="最小化"
            @click="minimize"
          >
            <el-icon>
              <Minus />
            </el-icon>
          </div>
          <div
            class="action-btn hover:(bg-red-600 text-light-50)"
            title="关闭"
            @click="closeApp"
          >
            <el-icon>
              <Close />
            </el-icon>
          </div>
        </div>
      </div>
    </template>

    <el-scrollbar view-class="appLayout-container theme-bg">
      <template v-if="curApp?.openType === IOpenType.Component">
        <Suspense>
          <template #default>
            <component
              :is="curApp.component"
            />
          </template>
          <template #fallback>
            <div>
              Loading...
            </div>
          </template>
        </Suspense>
      </template>
      <!-- <template v-else-if="curApp?.openType === IOpenType.Router">
        <router-view />
      </template> -->
      <template v-else-if="curApp?.openType === IOpenType.Iframe">
        <iframe
          :src="curApp.pageUrl"
          frameborder="0"
          class="w-full h-full"
        />
      </template>
    </el-scrollbar>
  </el-dialog>
</template>

<script setup lang="ts">
import { Close, FullScreen, Minus, Promotion } from '@element-plus/icons-vue'
import { closeApp, curApp, isFullscreen, minimize, openWindow, showAppLayout } from '@/store/useAppLayout'
import { IOpenType } from '@/types/app.type'
const dialogWidth = ref(document.documentElement.clientWidth * 0.7)
provide('appLayout', {
  dialogWidth,
})

onMounted(() => {
  let dialogEl: Element | null = null
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      dialogWidth.value = entry.contentRect.width
    }
  })

  watch(showAppLayout, (val) => {
    if (val) {
      nextTick(() => {
        dialogEl = document.querySelector('.appLayout')!
        resizeObserver.observe(dialogEl)
      })
    } else {
      resizeObserver.disconnect()
    }
  }, { immediate: true })
})

</script>

<style lang="less" scoped>

</style>
