<template>
  <div class="container">
    <Aside />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
  import Aside from './components/Aside.vue'
</script>

<style lang="less" scoped>
aside{
  width: var(--aside-width)
}
</style>