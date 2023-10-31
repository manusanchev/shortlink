<script setup lang="ts">
import CopyIcon from '@/components/icons/CopyIcon.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import { getCurrentOrigin } from '@/utils/generateRandomSlug'
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { LocationQueryValue } from 'vue-router'

const props = defineProps({
  slug: { type: Object as PropType<LocationQueryValue | LocationQueryValue[]>, required: true }
})

const shortUrl = `${getCurrentOrigin()}/${props.slug}`
const hasBeenCopied = ref(false)

async function copyUrl() {
  await navigator.clipboard.writeText(shortUrl).then(() => {
    hasBeenCopied.value = true
  })
}
</script>

<template>
  <div class="sl-link__container" @click="copyUrl">
    <div class="sl-link__url">{{ shortUrl }}</div>
    <span class="sl-link__copy">
      <CopyIcon v-if="!hasBeenCopied" />
      <span class="sl-link__copied" v-else>copied <CheckIcon /></span>
    </span>
  </div>
</template>

<style scoped>
.sl-link__url {
  background-color: var(--input-background-color);
  border: 1px solid transparent;
  padding: 2rem;
  font-size: 2rem;
  border-radius: 1.5rem;
}

.sl-link__container {
  position: relative;
  cursor: pointer;
}

.sl-link__copy {
  position: absolute;
  top: 0.25rem;
  right: 1rem;
  background-color: var(--input-background-color);
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--input-background-color);
}
.sl-link__copied,
.sl-link__copied > * {
  color: var(--url-copy-success-color);
  fill: var(--url-copy-success-color);
}
</style>
