<template>
  <div>
    <NuxtLazyHydrate when-idle>
      <p @click="console.log('hello!')">Nuxt module playground!</p>
    </NuxtLazyHydrate>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
