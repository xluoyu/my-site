<template>
  <!-- <el-space direction="vertical" size="large" style="width: 100%"> -->
  <div class="home">
    <CurTime />
    <!-- <Search /> -->
    <GridSpace />
  </div>

  <!-- </el-space> -->
</template>

<script lang="ts" setup>
  import CurTime from './components/CurTime.vue'
  // import Search from './components/Search.vue'
  import GridSpace from './components/GridSpace.vue'

</script>

<style lang="less" scoped>
.home{
  flex: 1;
  display: flex;
  flex-direction:column;
}
</style>