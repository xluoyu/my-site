<template>
  <div class="container-bg">
    <img
      ref="bgRef"
      src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1647382529790-b8af005d6031?ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQ3OTQxMzcx&ixlib=rb-1.2.1&w=2560&fm=jpg"
      alt=""
      crossOrigin="https://itab.s3.ladydaily.com"
      @load="loadImg"
    >
  </div>
</template>
<!-- https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1647705985427-337fc15ff6bc?ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQ3OTQxNTk1&ixlib=rb-1.2.1&w=2560&fm=jpg -->
<!-- https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1647382529790-b8af005d6031?ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQ3OTQxMzcx&ixlib=rb-1.2.1&w=2560&fm=jpg -->
<script lang="ts" setup>
import ColorThief from 'ColorThief'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/store/useSetting'
const useSetting = useSettingStore()
const { isDark } = storeToRefs(useSetting)
const bgRef = ref()
const colorThief = new ColorThief()
const imgColor = ref(false)
const loadImg = () => {
  const rgbArr = colorThief.getColor(bgRef.value)
  imgColor.value = 0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2
}

const changeStyle = (isDark) => {
  document.documentElement.style.setProperty('--aside-bg', isDark ? '218,223,229' : '48, 48, 48')
  document.documentElement.style.setProperty('--aside-color', isDark ? '34,34,34' : '233,233,233')
}

watchEffect(() => {
  if (isDark.value) {
    changeStyle(false)
  } else {
    changeStyle(imgColor.value)
  }
})

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
.dark .container-bg img{
  filter: blur(2px) brightness(70%);
}
</style>
