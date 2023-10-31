<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSupabaseClient from '@/composables/shared/useSupabaseClient'
import { useSaveUrlMapping } from '@/composables/urlMapping/useSaveUrlMapping'
import HomeInputForm from '@/components/home/HomeInputForm.vue'
import HomeInputButton from '@/components/home/HomeInputButton.vue'

const router = useRouter()
const supabase = useSupabaseClient()

const url = ref('')
const hasError = ref(false)
const isLoading = ref(false)

const { onSave } = useSaveUrlMapping(hasError, isLoading, supabase, router, url)
</script>

<template>
  <form class="sl-home__input-container" @submit.prevent="onSave">
    <HomeInputForm
      v-model="url"
      :has-error="hasError"
      type="url"
      placeholder="https://..."
      required
    />
    <HomeInputButton type="submit" aria-label="Enviar" :is-loading="isLoading" />
  </form>
</template>

<style scoped>
.sl-home__input-container {
  width: var(--home-body-width);
  position: relative;
  text-align: center;
}
</style>
