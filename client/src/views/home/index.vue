<template>
  <div class="home">
    <CurTime />
    <GridSpace />
    <AppLayout />
    <Hitokoto />
  </div>
</template>

<script lang="ts" setup>
import CurTime from './components/CurTime.vue'
// import Search from './components/Search.vue'
import GridSpace from './components/GridSpace.vue'
import AppLayout from './components/AppLayout.vue'
import Hitokoto from './components/Hitokoto.vue'

</script>

<style lang="less" scoped>
.home{
  flex: 1;
  display: flex;
  flex-direction:column;
}
</style>
