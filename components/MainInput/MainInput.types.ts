export interface IMainInputProps {
  modelValue: string;
}

export interface IMainInputEmits {
  (e: "update:modelValue", value: string): void;
}
