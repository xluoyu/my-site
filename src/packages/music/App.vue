<template>
  <div
    id="app-music"
    class="h-full text-$theme-color flex flex-col"
  >
    <div class="flex h-[calc(100%-var(--control-h))]">
      <Aside />
      <!-- <Home /> -->
      <router-view />
    </div>
    <Control />
  </div>
</template>

<script setup lang="ts">
import Aside from './components/Aside.vue'
import Control from './components/Control.vue'
// import Home from './components/Home.vue'
</script>

<style scoped>
#app-music{
  --control-h: 60px;
}
</style>
