<template>
  <div class="p-4">
    <template v-if="posts.length">
      <router-link
        v-for="item in posts"
        :key="item.path"
        :to="item.path"
        class="post-item"
      >
        <div class="flex justify-between">
          <Starport
            :port="'postTitle-' + item.path"
            :duration="400"
            class="text-base flex-1"
          >
            <h2 class="white-space-nowrap">
              {{ item.title }}
            </h2>
          </Starport>
          <div>
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
        </div>
        <time class="text-xs">{{ item.createTime }}</time>
      </router-link>
    </template>
    <el-empty
      v-else
      description="没有找到哟！"
    />
  </div>
</template>

<script setup lang="ts">
import { Starport } from 'vue-starport'
import { isDark } from '@/store/useSetting'
const router = useRouter()
const postsRoutes = router.getRoutes().filter(e => e.path.includes('/posts/'))
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
console.log(allPosts)
const route = useRoute()

const posts = computed(() => {
  if (route.query.tag) {
    return allPosts.filter(e => e.tags.some(tag => tag.label === route.query.tag))
  }

  if (route.query.q) {
    return allPosts.filter(e => e.title.includes(route.query.q))
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
