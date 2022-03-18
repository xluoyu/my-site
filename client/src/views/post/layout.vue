<template>
  <div class="md:container mx-auto flex justify-center py-8">
    <div class="flex-grow bg-light-50 mr-8">
      <router-view></router-view>
    </div>
    <aside class="w-1/7 h-center bg-light-50">
      这里是标签
    </aside>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>