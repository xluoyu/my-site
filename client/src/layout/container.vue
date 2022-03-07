<template>
  <div class="container">
    <Background />
    <Aside />
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
  import Aside from './components/Aside.vue'
  import Background from './components/Background.vue'
</script>

<style lang="less" scoped>
.container{
  width: 100vw;
  height: 100vh;
}
.main{
  width: calc(100vw - var(--aside-width));
  margin-left: var(--aside-width);
  padding: 60px 60px 20px;
  box-sizing: border-box;
}
</style>