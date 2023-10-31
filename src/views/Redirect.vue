<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import useSupabaseClient from '@/composables/shared/useSupabaseClient'
import { useGetUrlBySlug } from '@/composables/urlMapping/useGetUrlBySlug'

const route = useRoute()
const router = useRouter()
const supabase = useSupabaseClient()

const { slug } = route.params

const { url } = await useGetUrlBySlug(supabase, router, slug)
window.location.replace(url)
</script>
<template></template>
