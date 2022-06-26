<template>
  <div class="container-bg">
    <img
      ref="bgRef"
      src="https://images.unsplash.com/photo-1650853282913-9a3ecb60aa53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      alt=""
      crossOrigin="https://itab.s3.ladydaily.com"
      @load="loadImg"
    >
  </div>
</template>
<!-- https://images.unsplash.com/photo-1650853282913-9a3ecb60aa53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80 -->
<!-- https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1647382529790-b8af005d6031?ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQ3OTQxMzcx&ixlib=rb-1.2.1&w=2560&fm=jpg -->
<script lang="ts" setup>
import ColorThief from 'colorthief'
import { bgThemeColor, isDark } from '@/composables/useSetting'
const bgRef = ref()
const colorThief = new ColorThief()
const rgbArr = ref<number[]>([])
const loadImg = () => {
  bgThemeColor.value = colorThief.getColor(bgRef.value)
  isDark.value = 0.3 * bgThemeColor.value[0] + 0.6 * bgThemeColor.value[1] + 0.1 * bgThemeColor.value[2] < 70
}

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
    transition: filter .2s;
    transform: scale(1.1); // 处理blur带来的四周泛白问题
  }
}
.dark .container-bg img{
  filter: blur(2px) brightness(70%);
}
</style>
