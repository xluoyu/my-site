<template>
  <div
    id="search"
    class="flex items-center justify-center"
  >
    <el-input
      v-model="input"
      placeholder="Please input"
      class="search-input"
      clearable
      @change="search"
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
const input = ref('')
const router = useRouter()
const search = () => {
  const value = input.value
  if (value) {
    router.push({
      name: 'posts',
      query: {
        q: value,
      },
    })
  }
}
</script>

<style lang="less" scoped>
.search-input{
  width: 40%;
  min-width: 200px;
  ::v-deep(.el-input__inner) {
    color: var(--theme-color);
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    text-align: center;
    height: calc(var(--topbar-height) - 2px);
    line-height: calc(var(--topbar-height) - 2px);
  }
}
</style>
