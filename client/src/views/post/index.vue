<template>
  <div>
    <router-link
      v-for="item in posts"
      :key="item.path"
      :to="item.path"
    >
      <h2>{{ item.title }}</h2>

      <time>{{ item.createTime }}</time>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const postsRoutes = router.getRoutes().filter(e => e.path.includes('/posts/'))
const posts: any = postsRoutes.map((e) => {
  const frontmatter = typeof e.meta.frontmatter === 'object' ? e.meta.frontmatter : {}
  return {
    path: e.path,
    ...frontmatter,
  }
})

console.log(posts)

</script>

<style scoped>

</style>
