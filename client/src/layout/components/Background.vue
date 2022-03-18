<template>
  <div class="container-bg">
    <img src="https://itab.s3.ladydaily.com/files/itab/solar/2.jpg" alt="">
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.container-bg{
  position: fixed;
  z-index: -1;
  img{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: blur(1px);
  }
}
</style>