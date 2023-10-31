<script setup lang="ts">
defineProps({
  modelValue: { type: String },
  hasError: { type: Boolean }
})

const emits = defineEmits(['update:modelValue'])

function onInput(payload: Event): void {
  emits('update:modelValue', (payload?.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :value="modelValue"
    class="sl-home__input"
    :class="{ 'sl-home__input--error': hasError }"
    @input="onInput"
  />
</template>

<style scoped>
.sl-home__input {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem 4rem 1.5rem 1.5rem;
  font-family: 'Fixel', sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  background-color: var(--input-background-color);
  border: 0.025rem solid var(--input-border-color);
  font-size: 1.25rem;
  color: var(--input-text-color);
  animation: shadow-animation infinite 8s;
  height: var(--input-height);
}

.sl-home__input--error {
  border: 0.025rem solid var(--input-border-color-error);
}
@keyframes shadow-animation {
  0% {
    box-shadow: 0 0 1.5rem var(--input-box-shadow-primary);
  }

  25% {
    box-shadow: 0 0 1.25rem var(--input-box-shadow-secondary);
  }

  75% {
    box-shadow: 0 0 1rem var(--input-box-shadow-tertiary);
  }

  100% {
    box-shadow: 0 0 1.5rem var(--input-box-shadow-primary);
  }
}
</style>
