<template>
  <div class="w-full px-4">
    <el-table
      :data="musicList"
      row-class-name="cursor-pointer miniClick"
    >
      <el-table-column
        prop="name"
        label="音乐标题"
        min-width="80"
      >
        <template #default="scope">
          <span>{{ scope.row.al ? scope.row.al.name : '未知' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="音乐标题"
        min-width="80"
      />
      <el-table-column
        prop="ar"
        label="歌手"
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
        prop="al"
        label="专辑"
      >
        <template #default="scope">
          <span>{{ scope.row.al ? scope.row.al.name : '未知' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="dt"
        label="时长"
      />
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import { Search } from '~/music/api'
const route = useRoute()
const keywords = computed(() => {
  return route.query.keywords as string
})
const pages = reactive({
  limit: 30,
  offset: 0,
  allCounts: 0,
})

const musicList = ref<any[]>([])
const getList = () => {
  Search({
    keywords: keywords.value,
    type: 1,
    limit: pages.limit,
    offset: pages.offset,
  }).then((res) => {
    musicList.value = res.data.songs
    pages.allCounts = res.data.songCount
  })
}

watch(() => keywords.value, () => {
  if (!keywords.value) return
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
