<template>
  <el-scrollbar view-class="py-8 ">
    <div class="md:container mx-auto flex justify-center postContainer h-full">
      <div class="flex-grow mr-14 min-h-full box">
        <router-view />
      </div>

      <div class="w-1/5 h-center box">
        <div
          v-for="item in tags"
          :key="item.label"
        >
          {{ item.label }} ({{ item.count }})
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import tagsJSON from '@/posts/tags.json'

const tags = Object.keys(tagsJSON).map((key) => {
  return {
    label: key,
    count: tagsJSON[key],
  }
})
</script>

<style lang="less">
.postContainer {
  // height: calc(100vh - var(--topbar-height));
  // overflow: auto;
  --post-bg: rgba(255, 255, 255, .9);

  .box{
    height: fit-content;
    background: var(--post-bg);
    backdrop-filter: blur(4px);
    border-radius: var(--border-radius);
  }
}
.dark .postContainer {
  --post-bg: rgba(24, 24, 24, 0.9);
}
.h-center{
  height: fit-content;
}
</style>
