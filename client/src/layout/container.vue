<template>
  <div class="container">
    <aside>
      <div class="user-box">
        <img src="" alt="">
        <p></p>
      </div>
    </aside>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
aside{
  width: var(--aside-width)
}
</style>