<template>
  <div class="topbar">
    <div class="align-center"></div>
    <div class="align-center">
      <div class="align-center weather">
        <div id="he-plugin-simple"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { addScript } from '@/utils'
  import { onMounted } from 'vue'

  onMounted(() => {
    window.WIDGET = {
      'CONFIG': {
        'modules': '01234',
        'background': '1',
        'tmpColor': 'FFFFFF',
        'tmpSize': '12',
        'cityColor': 'FFFFFF',
        'citySize': '12',
        'aqiColor': 'FFFFFF',
        'aqiSize': '12',
        'weatherIconSize': '12',
        'alertIconSize': '12',
        'padding': '2px 4px 2px 4px',
        'shadow': '1',
        'language': 'zh',
        'borderRadius': '6',
        'fixed': 'false',
        'vertical': 'center',
        'horizontal': 'center',
        'key': '546b02f49cd2408199e9cf6b3ec1e5c7'
      }
    }
    addScript('https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0')
  })
</script>

<style lang="less" scoped>
.topbar{
  position: fixed;
  top: 0;
  left: var(--aside-width);
  z-index: 2;
  background: rgba(255,255,255,.4);
  width: calc(100vw - var(--aside-width));
  box-sizing: border-box;
  height: 24px;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.weather{
  // height: 100%;
  // width: 120px;
}
</style>
