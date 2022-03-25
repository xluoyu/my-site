<template>
  <el-scrollbar view-class="py-8 ">
    <div class="md:container px-$aside-width mx-auto flex justify-center postContainer relative h-full">
      <div class="max-w-screen-md flex-grow mr-4 min-h-full box">
        <router-view />
      </div>

      <div class="w-1/5 h-center box sticky top-8 p-4">
        <h3 class="mb-2">
          文章标签：
        </h3>
        <el-space wrap>
          <el-tag
            v-for="item in tags"
            :key="item.label"
            class="cursor-pointer "
            @click="handleTagClick(item.label)"
          >
            {{ item.label }} ({{ item.count }})
          </el-tag>
        </el-space>
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

const router = useRouter()

const handleTagClick = (label: string) => {
  router.push({
    name: 'posts',
    query: {
      tag: label,
    },
  })
}
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
