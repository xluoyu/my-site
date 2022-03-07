<template>
  <div class="time-container">
    <h2>{{cutTime}}</h2>
    <p><span>{{curDate}}</span> <span>星期{{curDay}}</span></p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

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
    curDate.value = time.getMonth() + 1 + '月' + time.getDate() + '日'
    curDay.value = dayArr[time.getDay()]
    cutTime.value = time.getHours() + ':' + time.getMinutes()
  }
  timeFun()
  setInterval(() => {
    timeFun()
  }, 1000)

</script>

<style lang="less" scoped>
.time-container{
  text-align: center;
  color: var(--theme-color);
  h2{
    font-size: 56px;
  }
  p{
    font-size: 16px;
  }
  span{
    display: inline-block;
    margin: 0 10px;
  }
}
</style>