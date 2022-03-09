<template>
  <div class="w-100vw h-100vh">
    <Background />
    <Aside />
    <div class="main">
      <TopBar />
      <!-- <div class="flex-1"> -->
      <slot></slot>
      <!-- </div> -->
      <Hitokoto />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Aside from './components/Aside.vue'
  import Background from './components/Background.vue'
  import TopBar from './components/TopBar.vue'
  import Hitokoto from './components/Hitokoto.vue'
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