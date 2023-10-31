import type { Router } from 'vue-router'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { RouteParamValue } from 'vue-router'

export async function useGetUrlBySlug(
  supabase: SupabaseClient,
  router: Router,
  slug: string | RouteParamValue[]
): Promise<{ url: string }> {
  if (!slug) {
    return { url: '/' }
  }
  const { data, error } = await supabase.from('url_mappings').select('url').eq('slug', slug)

  if (error) {
    return { url: '/' }
  }

  if (data?.length === 0 || !data[0].url) {
    return { url: '/' }
  }

  return { url: data[0].url }
}
