<template>
  <div>
    <div
      v-for="item in posts"
      :key="item.path"
    >
      <router-link :to="item.path">
        {{ item.title || '' }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const postsRoutes = router.getRoutes().filter(e => e.path.includes('/posts/'))
console.log(postsRoutes)
const posts: any = postsRoutes.map((e) => {
  const frontmatter = typeof e.meta.frontmatter === 'object' ? e.meta.frontmatter : {}
  return {
    path: e.path,
    ...frontmatter,
  }
})

</script>

<style scoped>

</style>
