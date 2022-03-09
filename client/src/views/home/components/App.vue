<template>
  <div class="app">
    <img :src="app.icon" />
    <p>{{app.name}}</p>
  </div>
</template>

<script setup lang="ts">
  import { IApp } from '@/types/app.type'
  defineProps<{
    app: IApp
  }>()


</script>

<style scoped>

</style>