<script setup lang="ts">
import SendIcon from '@/components/icons/SendIcon.vue'
import Loader from '@/components/Loader.vue'
import type { PropType } from 'vue'

defineProps({
  isLoading: { type: Boolean, required: true },
  type: { type: String as PropType<'button' | 'submit' | 'reset' | undefined>, required: true }
})
</script>

<template>
  <button :type="type" class="sl-home__button" :disabled="isLoading">
    <SendIcon v-if="!isLoading" />
    <Loader v-else />
  </button>
</template>

<style scoped>
.sl-home__button {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  background-color: var(--input-background-color);
  border: 0.025rem solid var(--input-border-color);
  color: var(--input-text-color);
  top: calc((var(--input-height) / 2) - (2.5rem / 2));
  right: 1rem;
  cursor: pointer;
}

.sl-home__button:disabled {
  border: 0.025rem solid var(--button-border-disabled);
  background-color: var(--input-background-color);
  cursor: not-allowed;
}

.sl-home__button:disabled > svg {
  fill: var(--button-border-disabled);
}
</style>
