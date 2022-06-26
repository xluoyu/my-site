<template>
  <aside
    id="aside"
    class="w-$aside-width"
    :style="style"
  >
    <div class="logo">
      <img
        src="@/assets/logo.png"
        alt=""
      >
    </div>
    <div class="tabbar">
      <router-link
        v-for="item in pageList"
        :key="item.label"
        :to="item.url"
        class="tabbar-item"
        :class="{ 'active': matchedPaths.includes(item.url) }"
      >
        <el-icon size="18px">
          <component
            :is="item.icon"
            :key="item.icon"
          />
        </el-icon>
        <p>{{ item.label }}</p>
      </router-link>
    </div>
    <div class="absolute bottom-16px cursor-pointer text-center w-full">
      <el-icon size="24px">
        <Setting />
      </el-icon>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { HomeFilled, Reading, Setting } from '@element-plus/icons-vue'
import { bgThemeColor, isDark } from '@/composables/useSetting'
const pageList = [
  {
    label: '主页',
    icon: HomeFilled,
    url: '/',
  },
  {
    label: '文章',
    icon: Reading,
    url: '/posts',
  },
]

const style = computed(() => {
  return {
    '--aside-bg': `rgba(${bgThemeColor.value.join(',')},.6)` || transparent,
    '--aside-color': isDark.value ? '233,233,233' : '34,34,34',
  }
})

const route = useRoute()
const matchedPaths = computed(() => {
  return route.matched.map(e => e.path)
})
</script>

<style lang="less" scoped>
#aside{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  height:100%;
  backdrop-filter: blur(4px);
  background:var(--aside-bg);
  color: rgb(var(--aside-color));
  transition: background 0.2s;
  .logo{
    padding: 40px 0;
    img{
      width: 80%;
      margin: 0 auto;
    }
  }
  .tabbar{
    .tabbar-item {
      display: block;
      text-align: center;
      color: inherit;
      cursor: pointer;
      font-size: 14px;
      padding: 15px 0;
      &:hover{
        background: rgba(250,250,250,.2);
      }
      &.active{
        background: rgba(250,250,250,.4);
      }
    }
  }
}
</style>
