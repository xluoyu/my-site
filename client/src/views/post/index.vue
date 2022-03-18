<template>
  <div>
    <div v-for="item in posts" :key="item.path">
      <router-link :to="item.path">{{item.title || ''}}</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
  const routes = router.getRoutes()

  const posts:any = routes.filter(e => e.path.includes('/posts/')).map(e => {
    const frontmatter = typeof e.meta.frontmatter === 'object' ? e.meta.frontmatter : {}
    return {
      path: e.path,
      ...frontmatter
    }
  })

</script>

<style scoped>

</style>