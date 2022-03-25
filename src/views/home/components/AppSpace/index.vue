<template>
  <div
    ref="gridSpace"
    class="gridSpace"
  >
    <HnadleApp
      v-for="item in AppList"
      :key="item.key"
      :app="item"
    >
      <App :app="item" />
    </HnadleApp>
  </div>
</template>

<script setup lang="ts">
import App from './App.vue'
import HnadleApp from './HandleApp.vue'
import AppList from '@/packages'
import { useAppDrag } from '@/store/useAppDrag'

onMounted(() => {
  useAppDrag('.gridSpace')
})

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
