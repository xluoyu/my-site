<template>
  <el-table
    :data="musicList"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="歌曲名"
      width="180"
    />
    <el-table-column
      prop="ar"
      label="歌手"
      width="180"
    >
      <template #default="scope">
        <div>
          <span
            v-for="item in scope.row.ar"
            :key="item.id"
            class="artist"
          >
            <router-link :to="{name: 'music-artist', query: {id: item.id}}"> {{ item.name }}</router-link>
          </span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
    />
  </el-table>
</template>

<script setup lang='ts'>
import { Search } from '~/music/api'
const props = defineProps({
  keywords: {
    type: String,
    default: '',
  },
})
const pages = reactive({
  limit: 30,
  offset: 0,
  allCounts: 0,
})

const musicList = ref<any[]>([])
const getList = () => {
  Search({
    keywords: props.keywords as string,
    type: 1,
    limit: pages.limit,
    offset: pages.offset,
  }).then((res) => {
    musicList.value = res.data.songs
    pages.allCounts = res.data.songCount
  })
}

watch(() => props.keywords, () => {
  if (!props.keywords) return
  pages.offset = 0
  getList()
}, { immediate: true })
</script>

<style lang='less' scoped>
.artist + .artist{
  &::before{
    content: ' / ';
  }
}
</style>
