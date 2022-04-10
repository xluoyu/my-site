<template>
  <div class="w-full sticky top-0 theme-bg pb-2 flex bg-$theme-bg justify-center z-10">
    <el-autocomplete
      v-model="keywords"
      :fetch-suggestions="querySearchAsync"
      placeholder="搜点什么"
      class="mx-auto text-center input-transparent w-2/5"
      select-when-unmatched
      @select="onSelect"
    >
      <template #default="{ item }">
        <!-- <template v-if="item.type === 'tip'">
          <p>{{ item.name }}</p>
        </template>
        <template v-if="item.type === 'artists'">
          <div class="flex ">
            <img
              :src="item.img1v1Url || item.picUrl"
              alt=""
              class="w-8 h-8 rounded mr-2"
            >
            <p>{{ item.name }}</p>
          </div>
        </template> -->
        <!-- <template v-if="item.type === 'songs'"> -->
        <!-- 歌曲 -->
        <div class="flex justify-between">
          <p>{{ item.name }}</p>
          <p>{{ item.artists }}</p>
        </div>
        <!-- </template> -->
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
      // if (res.data.artists) {
      //   cbList.push({ type: 'tip', name: '歌手', value: keywords.value })
      //   cbList = cbList.concat(res.data.artists.map(item => ({ ...item, type: 'artists', value: item.name })))
      // }
      // 保留歌曲栏目
      if (res.data.songs) {
        // cbList.push({ type: 'tip', name: '歌曲', value: keywords.value })
        cbList = cbList.concat(res.data.songs.map((item) => {
          if (Array.isArray(item.artists)) {
            item.artists = item.artists.slice(0, 3).map(e => e.name).join(' / ')
            if (item.artists.length > 3) {
              item.artists += '...'
            }
          }
          return { ...item, type: 'songs', value: item.name }
        }))
      }
      cb(cbList)
    })
  } else {
    cb([])
  }
}

const router = useRouter()
const onSelect = (e) => {
  switch (e.type) {
    case 'tip':
      router.push({ name: 'music-search', query: { keywords: keywords.value, type: e.name === '歌手' ? 'artists' : 'songs' } })
      break
    case 'artists':
      router.push({ name: 'music-search', query: { keywords: e.name, type: e.type } })
      break
    case 'songs':
      // router.push({ name: 'music-search', query: { keywords: e.name, type: e.type } })
      console.log('准备播放歌曲', e.name)
      break
    default:
      router.push({ name: 'music-search', query: { keywords: keywords.value } })
      break
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
