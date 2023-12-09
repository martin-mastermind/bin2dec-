<template>
  <section>
    <NuxtLazyHydrate when-idle>
      <MainInput v-model="binaryInput" />
      <!-- Result span: get input, transform to result, show result -->
    </NuxtLazyHydrate>
  </section>
</template>

<script lang="ts" setup>
const binaryInput = ref("");
</script>

<style></style>
