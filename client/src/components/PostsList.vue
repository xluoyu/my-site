<template>
  <div>
    这是个列表
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes()
console.log(routes)
</script>

<style scoped>

</style>
