import { generateRandomSlug } from '@/utils/generateRandomSlug'
import type { Ref } from 'vue'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Router } from 'vue-router'

export function useSaveUrlMapping(
  hasError: Ref<boolean>,
  isLoading: Ref<boolean>,
  supabase: SupabaseClient,
  router: Router,
  url: Ref<string>
): { onSave: (payload: Event) => void } {
  async function onSave() {
    hasError.value = false
    isLoading.value = true

    const id = self.crypto.randomUUID()
    const slug = generateRandomSlug(id)
    const { error } = await supabase.from('url_mappings').insert({
      id,
      slug,
      url: url.value
    })

    if (error) {
      hasError.value = true
      isLoading.value = false
      return
    }

    await router.push({ name: 'link', query: { slug } })
  }

  return { onSave }
}
