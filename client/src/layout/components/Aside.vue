<template>
  <aside>
    <div class="user-box">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="tabbar-column">
      <div class="tabbar-item" v-for="item in pageList" :key="item.label">
        <el-icon>
          <component :is="item.icon" :key="item.icon" />
          <!-- <HomeFilled /> -->
        </el-icon>
        <p>{{item.label}}</p>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
  import {HomeFilled, Menu, Reading} from '@element-plus/icons-vue'
  const pageList = [
    {
      label: '主页',
      icon: HomeFilled,
      url: '/'
    },
    {
      label: '应用',
      icon: Menu,
      url: '/apps'
    },
    {
      label: '文章',
      icon: Reading,
      url: '/docs'
    }
  ]
</script>

<style lang="scss" scoped>

</style>