<template>
  <div>
    <AppLayout />
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/views/home/components/AppDialog/index.vue'
import appList from '@/packages'
import { openApp } from '@/store/useAppLayout'

const route = useRoute()
const { appName } = route.params

const curApp = appList.find(e => e.key === appName)

if (curApp) {
  openApp(curApp, true)
} else {
  alert('未找到测试app')
}
</script>

<style scoped>

</style>
