<template>
  <div class="gridSpace">
    <App
      v-for="item in AppList"
      :key="item.key"
      :app="item"
    />
  </div>
</template>

<script setup lang="ts">
import App from './App.vue'
import AppList from '@/packages'
</script>

<style lang="less" scoped>
.gridSpace{
  display:grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, calc(var(--app-width) + 10px));
  grid-template-rows: repeat(auto-fill, var(--app-height));
  grid-gap: var(--grid-row-gap) var(--grid-col-gap);
  justify-content: center;
  align-content: center;
  width: 80%;
  flex: 1;
  // border: 1px solid red;
  margin: 0 auto;
}
</style>
