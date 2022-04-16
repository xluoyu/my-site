<template>
  <div class="px-14 py-7">
    <div class>
      <Starport
        :port="'postTitle-' + route.path"
        :duration="400"
        class="h-8"
      >
        <h2 class="text-2xl">
          {{ frontmatter.title }}
        </h2>
      </Starport>
      <h5 class="text-sm mt-3">
        {{ frontmatter.author }}
        <time class="text-xs text-gray-500">{{ frontmatter.createTime }}</time>
      </h5>
      <h5
        v-if="frontmatter.source"
        class="text-sm mt-3 text-gray-500"
      >
        原文链接: <a
          :href="frontmatter.source"
          target="_blank"
          class="text-blue-600 font-normal"
        >{{ frontmatter.source }}</a>
      </h5>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Starport } from 'vue-starport'
const route = useRoute()
const frontmatter: any = route.meta.frontmatter
</script>

<style scoped>

</style>
