<template>
  <aside class="aside w-$aside-width">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="tabbar">
      <div
        class="tabbar-item"
        :class="{ 'active': activeItem === item.url }"
        v-for="item in pageList"
        :key="item.label"
        @click="changeActiveItem(item.url)"
      >
        <el-icon size="18px">
          <component :is="item.icon" :key="item.icon" />
        </el-icon>
        <p>{{item.label}}</p>
      </div>
    </div>
    <div class="absolute bottom-16px cursor-pointer text-center w-full">
      <el-icon size="24px">
        <Setting />
      </el-icon>
    </div>
  </aside>
</template>

<script setup lang="ts">
  import {HomeFilled, Reading, Setting} from '@element-plus/icons-vue'
  import { ref } from 'vue'
  const pageList = [
    {
      label: '主页',
      icon: HomeFilled,
      url: '/'
    },
    {
      label: '文章',
      icon: Reading,
      url: '/docs'
    }
  ]

  const activeItem = ref('/')
  const changeActiveItem = (url) => {
    activeItem.value = url
  }
</script>

<style lang="less" scoped>
.aside{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  // width:var(--aside-width);
  height:100%;
  background: rgba(15, 15, 15, .4);
  color: #ccc;
  backdrop-filter: blur(4px);
  .logo{
    padding: 40px 0;
    img{
      width: 80%;
      margin: 0 auto;
    }
  }
  .tabbar{
    .tabbar-item {
      text-align: center;
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