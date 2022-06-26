<template>
  <div class="w-100vw h-100vh">
    <Aside />
    <Background />
    <div class="main">
      <!-- <TopBar /> -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Aside from './components/Aside.vue'
import TopBar from './components/TopBar.vue'
import Background from './components/Background.vue'
</script>

<style lang="less" scoped>
.main{
  width: 100vw;
  height: 100vh;
  // padding: 50px 60px 20px;
  box-sizing: border-box;
  // position:fixed;
  // padding-left: var(--aside-width);
  position: fixed;
  display: flex;
  flex-direction: column;
}
</style>
