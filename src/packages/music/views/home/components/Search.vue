<template>
  <div class="w-full sticky top-0 theme-bg pb-4 flex justify-center">
    <el-autocomplete
      v-model="keywords"
      :fetch-suggestions="querySearchAsync"
      placeholder="搜点什么"
      class="mx-auto text-center input-transparent w-2/5"
    >
      <template #default="{ item }">
        <template v-if="item.type === 'tip'">
          <!-- 栏目 -->
          <p>{{ item.name }}</p>
        </template>
        <template v-if="item.type === 'artists'">
          <!-- 歌手 -->
          <div class="flex ">
            <img
              :src="item.img1v1Url || item.picUrl"
              alt=""
              class="w-8 h-8"
            >
            <p>{{ item.name }}</p>
          </div>
        </template>
        <template v-if="item.type === 'songs'">
          <!-- 歌曲 -->
          <div class="flex justify-between">
            <p>{{ item.name }}</p>
            <p>
              <span
                v-for="artist in item.artists"
                :key="artist.id"
              >{{ artist.name }}</span>
            </p>
          </div>
        </template>
      </template>
      <template #prefix>
        <el-icon class="el-input__icon">
          <Search />
        </el-icon>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { GetSearchSuggest } from '~/music/api'

const keywords = ref('')
const querySearchAsync = (queryString: string, cb) => {
  if (keywords.value) {
    GetSearchSuggest({ keywords: keywords.value }).then((res) => {
      let cbList: any[] = []
      // 保留歌手栏目
      if (res.data.artists) {
        cbList.push({ type: 'tip', name: '歌手' })
        cbList = cbList.concat(res.data.artists.map(item => ({ ...item, type: 'artists' })))
      }
      // 保留歌曲栏目
      if (res.data.songs) {
        cbList.push({ type: 'tip', name: '歌曲' })
        cbList = cbList.concat(res.data.songs.map(item => ({ ...item, type: 'songs' })))
      }
      console.log(cbList)
      cb(cbList)
    })
  } else {
    cb([])
  }
}
</script>

<style lang="less" scoped>
.search{
  width:40%;
  background-color: rgba(150,150,150,0.2);
  border-radius: 20px;
  margin: 0 auto;
  display: block;
}
</style>
