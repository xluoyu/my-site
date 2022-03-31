<template>
  <div class="h-full text-$theme-color flex flex-col">
    <div class="flex flex-1">
      <Aside />
      <Home />
    </div>
    <Control />
  </div>
</template>

<script setup lang="ts">
import Aside from './components/Aside.vue'
import Control from './components/Control.vue'
import Home from './components/Home.vue'
</script>

<style scoped>

</style>
