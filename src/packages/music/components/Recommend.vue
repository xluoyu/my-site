<template>
  <div
    class="recommend"
    :style="{'grid-template-columns': gridColumnsStyle}"
  >
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
import type { Ref } from 'vue'
import { GetPlayList } from '../api'
const playList = ref<any[]>([])
onMounted(() => {
  GetPlayList().then((res) => {
    playList.value = res.data
  })
})

const { dialogWidth } = inject<{ dialogWidth: Ref<number> }>('appLayout')!
const gridColumnsStyle = computed(() => {
  if (dialogWidth.value > 1200) {
    return 'repeat(auto-fit, 12rem)'
  } else {
    return 'repeat(4, minmax(4rem, 12rem))'
  }
})

</script>

<style scoped>
.recommend{
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 20px;
  padding: 20px;
}
</style>
