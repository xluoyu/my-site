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
import GridSpace from './components/AppSpace/index.vue'
import AppLayout from './components/AppDialog/index.vue'
import Hitokoto from './components/Hitokoto.vue'

</script>

<style lang="less" scoped>
.home{
  flex: 1;
  display: flex;
  flex-direction:column;
}
</style>
