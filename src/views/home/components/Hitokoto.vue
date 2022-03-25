<template>
  <div class="text-light-50 text-center mx-auto cursor-default hitokoto">
    『 {{ hitokoto.text }} 』
    <p>
      ——
      <template v-if="hitokoto.from">
        {{ hitokoto.from }}
      </template>
      <template v-if="hitokoto.fromWho">
        - {{ hitokoto.fromWho }}
      </template>
    </p>
  </div>
</template>

<script setup lang="ts">
import { GetHitokoto } from '@/api/common'
const hitokoto = reactive({
  text: '',
  from: '',
  fromWho: '',
})
onMounted(() => {
  GetHitokoto().then((res: any) => {
    hitokoto.text = res.hitokoto
    hitokoto.fromWho = res.from_who
    hitokoto.from = res.from
  })
})
</script>

<style lang="less" scoped>
.hitokoto{
  width: fit-content;
  font-size: 12px;
  p{
    opacity: 0;
    transition: opacity .3s;
  }
  &:hover{
    p{
      opacity: 1;
    }
  }
}
</style>
