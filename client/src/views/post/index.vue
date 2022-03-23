<template>
  <div class="p-4">
    <router-link
      v-for="item in posts"
      :key="item.path"
      :to="item.path"
      class="post-item"
    >
      <div>
        <h2 class="text-base mb-2 mr-2 inline">
          {{ item.title }}
        </h2>
        <el-tag
          v-for="tag in item.tags"
          :key="tag.label"
          class="mx-1"
          :type="tag.type"
          :effect="isDark ? 'dark' : 'light'"
          size="small"
        >
          {{ tag.label }}
        </el-tag>
      </div>
      <time class="text-xs">{{ item.createTime }}</time>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/store/setting'
const router = useRouter()
const postsRoutes = router.getRoutes().filter(e => e.path.includes('/posts/'))
const Setting = useSettingStore()
const { isDark } = storeToRefs(Setting)
const allPosts: any = postsRoutes.map((e) => {
  const frontmatter: any = typeof e.meta.frontmatter === 'object' ? e.meta.frontmatter : {}
  const tags = frontmatter.tags
    ? frontmatter.tags.map((tag) => {
      return {
        label: tag,
        type: '',
      }
    })
    : []

  if (!frontmatter.online) {
    tags.push({ label: '草稿', type: 'warning' })
  }

  if (frontmatter.source) {
    tags.push({ label: '转载', type: 'success' })
  }

  return {
    path: e.path,
    ...frontmatter,
    tags,
  }
})
const route = useRoute()

const posts = computed(() => {
  if (route.query.tag) {
    return allPosts.filter(e => e.tags.some(tag => tag.label === route.query.tag))
  }

  return allPosts
})

onMounted(() => {
  console.log('载入')
})
</script>

<style lang="less" scoped>
.post-item{
  display: block;
  padding: .75em;
  &+.post-item{
    border-top: 1px solid #ccc;
  }
}
</style>
