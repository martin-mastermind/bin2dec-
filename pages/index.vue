<template>
  <section class="index">
    <NuxtLazyHydrate when-idle>
      <MainInput v-model="binaryInput" />
      <LazyMainResult v-if="binaryInput" :binarish-string="binaryInput" />
    </NuxtLazyHydrate>
  </section>
</template>

<script lang="ts" setup>
const binaryInput = ref("");
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
