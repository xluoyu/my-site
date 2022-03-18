<template>
  <div class="w-400px bg-light-50 m-auto">
    <Test ref="current" />
  </div>
</template>

<script setup lang="ts">
  // import { GetTestDocs } from '@/api/docs'
  import Test from '@/posts/text.md'
  const current = ref()
  // const docs = ref('')
  console.log(Test)
  onMounted(() => {
    console.log(current.value)
  })

</script>

<style scoped>

</style>