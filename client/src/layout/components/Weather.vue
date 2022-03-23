<template>
  <div id="he-plugin-simple" />
</template>

<script setup lang="ts">
import { addScript } from '@/utils'

onMounted(() => {
  window.WIDGET = {
    CONFIG: {
      modules: '01234',
      background: '1',
      tmpColor: 'FFFFFF',
      tmpSize: '12',
      cityColor: 'FFFFFF',
      citySize: '12',
      aqiColor: 'FFFFFF',
      aqiSize: '12',
      weatherIconSize: '12',
      alertIconSize: '12',
      padding: '2px 4px 2px 4px',
      shadow: '1',
      language: 'zh',
      borderRadius: '6',
      fixed: 'false',
      vertical: 'center',
      horizontal: 'center',
      key: '546b02f49cd2408199e9cf6b3ec1e5c7',
    },
  }
  addScript('https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0')
})
</script>

<style lang="scss" scoped>

</style>
