<template>
  <div class="main-input">
    <input type="text" :value="modelValue" @keydown.prevent="handleKeydown" />
  </div>
</template>

<script lang="ts" setup>
import type { IMainInputEmits, IMainInputProps } from "./MainInput.types";

const props = defineProps<IMainInputProps>();
const emit = defineEmits<IMainInputEmits>();

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Backspace") {
    emit("update:modelValue", props.modelValue.slice(0, -1));
    return;
  }

  if (event.key !== "0" && event.key !== "1") return false;
  emit("update:modelValue", props.modelValue + event.key);
};
</script>

<style scoped></style>
