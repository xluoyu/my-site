<template>
  <div class="container">
    <Background />
    <Aside />
    <TopBar />
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
  import Aside from './components/Aside.vue'
  import Background from './components/Background.vue'
  import TopBar from './components/TopBar.vue'
</script>

<style lang="less" scoped>
.container{
  width: 100vw;
  height: 100vh;
}
.main{
  width: 100vw;
  height: 100vh;
  // margin-left: var(--aside-width);
  padding: 50px 60px 20px;
  box-sizing: border-box;
  position:fixed;
  // z-index: 2;
}
</style>