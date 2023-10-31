<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import CopyLinkCard from '@/components/copyLink/CopyLinkCard.vue'

const route = useRoute()
const router = useRouter()

const { slug } = route.query

if (!slug) {
  router.push('/')
}
</script>

<template>
  <main class="sl-link">
    <h1 class="sl-link__title">Be a good person!</h1>
    <CopyLinkCard :slug="slug" />
    <RouterLink to="/" class="sl-link__back">Volver</RouterLink>
  </main>
</template>

<style scoped>
.sl-link {
  width: var(--copy-body-width);
  margin: auto;
  padding-top: 4rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
}

.sl-link__title {
  font-size: 4rem;
}

.sl-link__back {
  color: var(--link-go-back);
}
</style>
