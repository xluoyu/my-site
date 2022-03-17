<template>
  <div class="w-400px bg-light-50 m-auto" v-html="docs">
  </div>
</template>

<script setup lang="ts">
  import { GetTestDocs } from '@/api/docs'
  const docs = ref('')
  onMounted(() => {
    GetTestDocs().then(res => {
      docs.value = res.data.html

      console.log(docs.value)
    })
  })

</script>

<style scoped>

</style>