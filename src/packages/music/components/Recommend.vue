<template>
  <div class="recommend">
    <div
      v-for="item in playList"
      :key="item.id"
      class="cursor-pointer"
    >
      <img
        :src="item.picUrl"
        alt=""
      >
      <p class="mt-2 text-sm text-justify">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GetPlayList } from '../api'

const { data: playList } = await GetPlayList()
</script>

<style scoped>
.recommend{
  display: grid;
  grid-template-columns: repeat(5, minmax(6rem, 12rem));
  justify-content: center;
  align-content: center;
  grid-gap: 20px;
  padding: 20px;
}
</style>
