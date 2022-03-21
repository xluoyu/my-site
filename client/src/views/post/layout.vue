<template>
  <div class="md:container mx-auto flex justify-center py-8">
    <div class="flex-grow bg-light-50 mr-8">
      <router-view />
    </div>
    <aside class="w-1/7 h-center bg-light-50">
      <div
        v-for="item in tags"
        :key="item.label"
      >
        {{ item.label }} ({{ item.count }})
      </div>
    </aside>
  </div>
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

<style scoped>

</style>
