<template>
  <router-view />
</template>

<script lang="ts" setup>
import router from './router'
import { loadAppRoutes } from '@/utils/routerHandle'
loadAppRoutes(router)

onMounted(() => {
  const router = useRouter()
  router.push('/music')
})
</script>
