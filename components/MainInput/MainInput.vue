<template>
  <div class="main-input">
    <input
      id="binary-input"
      type="text"
      :value="modelValue"
      maxlength="8"
      @keydown.prevent="handleKeydown"
    />
    <span>Enter binary string</span>
  </div>
</template>

<script lang="ts" setup>
import type { IMainInputEmits, IMainInputProps } from "./MainInput.types";

const props = defineProps<IMainInputProps>();
const emit = defineEmits<IMainInputEmits>();

const placeholderOpacity = computed(() => {
  return +(props.modelValue.length === 0);
});

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Backspace") {
    emit("update:modelValue", props.modelValue.slice(0, -1));
    return;
  }

  if (event.key !== "0" && event.key !== "1") return false;

  const newValue = props.modelValue + event.key;

  if (newValue.length > 8) {
    alert("Maximum length of binary string - 8 numbers");
    return;
  }

  emit("update:modelValue", newValue);
};
</script>

<style scoped>
.main-input {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    color: var(--text);
    font-size: 28px;
    background: transparent;
    border: 4px solid var(--primary);
    outline: none;
    transition: 0.25s ease-in-out;
    padding: 8px 12px;

    &:hover,
    &:focus {
      & + span {
        opacity: 0;
      }
    }

    &:hover {
      background: var(--primary);
    }

    &:focus {
      background: var(--primary);
      box-shadow: 0 0 24px 0 var(--primary);
    }
  }

  span {
    position: absolute;
    top: 10px;
    left: 14px;
    font-size: 28px;
    pointer-events: none;
    transition: 0.25s ease-in-out;
    opacity: v-bind("placeholderOpacity");
  }
}
</style>
