<template>
  <div
    id="app-music"
    class="h-full text-$theme-color  flex flex-col"
  >
    <div class="flex h-[calc(100%-var(--control-h))]">
      <Aside />
      <div
        class="mb-1px flex-1"
      >
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </div>
    </div>
    <Control />
  </div>
</template>

<script setup lang="ts">
import Aside from './Aside.vue'
import Control from './Control.vue'
// import Home from './components/Home.vue'

</script>

<style scoped>
#app-music{
  --control-h: 60px;
}
</style>
