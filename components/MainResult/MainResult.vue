<template>
  <section class="main-result">
    <span v-if="isBinary" class="main-result__text">
      Entered binary in decimal: <b>{{ decimal }}</b>
    </span>
    <span v-else class="main-result__error">Entered string isn't binary</span>
  </section>
</template>

<script lang="ts" setup>
import type { IMainResultProps } from "./MainResult.types";

const props = defineProps<IMainResultProps>();

const isBinary = computed(() =>
  props.binarishString.split("").every((char) => char === "0" || char === "1")
);

const decimal = computed(() => {
  if (!isBinary.value) return 0;

  const binaryLength = props.binarishString.length - 1;

  let result = 0;
  for (let index = binaryLength; index >= 0; index--) {
    result += Math.pow(2, binaryLength - index) * +props.binarishString[index];
  }
  return result;
});
</script>

<style scoped>
.main-result {
  display: flex;
  font-size: 20px;

  b {
    text-shadow: var(--text) 0 0 12px;
  }
}
</style>
