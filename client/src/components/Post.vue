<template>
  <div class="px-14 scrollbar-color pb-14 ">
    <div class>
      <h3>{{ frontmatter.title }}</h3>
      <h5>{{ frontmatter.author }}</h5>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const frontmatter: any = route.meta.frontmatter
console.log(route)
</script>

<style scoped>

</style>
