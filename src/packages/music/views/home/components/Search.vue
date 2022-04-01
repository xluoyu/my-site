<template>
  <div class="w-full sticky top-0 theme-bg pb-4">
    <el-input
      placeholder="搜点什么"
      class="input-transparent search"
    >
      <template #prefix>
        <el-icon class="el-input__icon">
          <Search />
        </el-icon>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

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
