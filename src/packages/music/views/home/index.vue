<template>
  <div class="flex-1">
    <el-scrollbar>
      <Search />
      <Recommend />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import Recommend from './components/Recommend.vue'
import Search from './components/Search.vue'
</script>

<style scoped>

</style>
