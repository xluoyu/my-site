<template>
  <div
    class="full bg-gray-700 bg-opacity-20 p-4 appGroup"
    @click="showAppGroup = true"
  >
    <div
      v-for="item in apps"
      :key="item.id"
      class="full"
    >
      <img
        class="full rounded-lg object-cover"
        :src="item.app.icon"
      >
    </div>
  </div>
  <el-dialog
    v-model="showAppGroup"
    append-to-body
    :show-close="false"
    custom-class="no-elDialog !w-1/3 !rounded-2xl min-h-500px !bg-gray-700 !bg-opacity-30"
  >
    <div class="group-dialog">
      <el-input
        v-model="name"
        class="input-transparent text-light-800"
      />
    </div>
  </el-dialog>
</template>

<script lang='ts' setup>
import type { IUserAppOptionsWithApp } from '@/composables/useInfo'

const attrs = useAttrs()
const apps = attrs.apps as IUserAppOptionsWithApp[]
const name = ref(attrs.name as string || '')

const showAppGroup = ref(false)

const show = () => {
  console.log(apps)
}
</script>

<style lang="less" scoped>
.group-dialog{
  width: 20%;
}
.appGroup{
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, calc(60px * 0.6));
  grid-template-rows: repeat(auto-fill, calc(60px * 0.6));
  grid-gap: var(--grid-row-gap) var(--grid-col-gap);
}
</style>
