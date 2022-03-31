<template>
  <div>
    <AppLayout />
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/views/home/components/AppDialog/index.vue'
import appList from '@/packages'
import { useAppLayoutStore } from '@/store/useAppLayout'

const route = useRoute()
const { appName } = route.params

const curApp = appList.find(e => e.key === appName)

const { openApp } = useAppLayoutStore()
if (curApp) {
  openApp(curApp)
} else {
  alert('未找到测试app')
}
</script>

<style scoped>

</style>
