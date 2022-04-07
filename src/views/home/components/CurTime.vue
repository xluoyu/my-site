<template>
  <div class="text-light-50 text-center time-container mt-6 <xl:mt-3">
    <h2 class="text-6xl <xl:text-4xl">
      {{ cutTime }}
    </h2>
    <p class="text-lg  <xl:text-sm py-2">
      <span>{{ curDate }}</span> <span>星期{{ curDay }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { numAddZero } from '@/utils'

const dayArr = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  0: '日',
}
const curDate = ref('')
const curDay = ref('')
const cutTime = ref('')

const timeFun = () => {
  const time = new Date()
  curDate.value = `${numAddZero(time.getMonth() + 1)}月${numAddZero(time.getDate())}日`
  curDay.value = dayArr[time.getDay()]
  cutTime.value = `${numAddZero(time.getHours())}:${numAddZero(time.getMinutes())}`
}
timeFun()
setInterval(() => {
  timeFun()
}, 1000)

</script>

<style lang="less" scoped>
.time-container{
  span{
    display: inline-block;
    margin: 0 .2em;
  }
}
</style>
