<template>
  <div
    ref="gridSpace"
    class="gridSpace"
  >
    <HnadleApp
      v-for="item in userAppList"
      :key="item.id"
      :user-app="item"
    >
      <App
        v-contextmenu:appContextMenu="1321"
        :user-app="item"
      />
    </HnadleApp>

    <v-contextmenu ref="appContextMenu">
      <template #default="data">
        <v-contextmenu-item @click="showTest(data)">
          菜单1
        </v-contextmenu-item>
      </template>
    </v-contextmenu>
  </div>
</template>

<script setup lang="ts">
import App from './App.vue'
import HnadleApp from './HandleApp.vue'
import { useAppDrag } from '@/composables/useAppDrag'
import { appContextMenu } from '@/composables/useAppContextMenu'
import { userAppList } from '@/composables/useInfo'

onMounted(() => {
  useAppDrag('.gridSpace')
})

const showTest = (data) => {
  console.log(data)
}

</script>

<style lang="less" scoped>
.gridSpace{
  display:grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, calc(var(--app-width)));
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
