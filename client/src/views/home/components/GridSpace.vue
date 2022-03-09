<template>
  <div class="gridSpace">
    <App v-for="item in appList" :key="item.key" :app="item" />
  </div>
</template>

<script setup lang="ts">
  import App from './App.vue'
  import { IAppType, IOpenType, IApp } from '../../../types/app.type'
  const appList:IApp[] = [
    {
      name: '聊天室',
      icon: 'https://xluoyu.github.io/image-riverbed/iphone/safari.png',
      key: 'chat',
      type: IAppType.App,
      openType: IOpenType.Component
    }, {
      name: '聊天室',
      icon: 'https://xluoyu.github.io/image-riverbed/iphone/safari.png',
      key: 'chat1',
      type: IAppType.App,
      openType: IOpenType.Component
    }
  ]
</script>

<style lang="less" scoped>
.gridSpace{
  display:grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, var(--app-width));
  grid-template-rows: repeat(auto-fill, var(--app-height));
  grid-gap: var(--grid-row-gap) var(--grid-col-gap);
  justify-content: center;
  align-content: center;
  width: 80%;
  flex: 1;
  // border: 1px solid red;
  margin: 0 auto;
}
</style>