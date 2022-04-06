<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Container from './layout/container.vue'
import shareElement from '@/components/shareElement/index.vue'
import Test from '@/components/shareElement/test.vue'

</script>

<template>
  <Container>
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <router-view />
    </transition>

    <shareElement>
      <Test />
    </shareElement>
  </Container>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30%);
}
</style>
