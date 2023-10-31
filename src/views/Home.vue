<script setup lang="ts">
import HomeForm from '@/components/home/HomeForm.vue'
</script>

<template>
  <main class="sl-home">
    <h1 class="sl-home__title">
      The definitive URL <span class="sl-home-title__background">shortener</span>
    </h1>
    <HomeForm />
  </main>
</template>

<style scoped>
.sl-home {
  max-width: var(--home-body-width);
  padding: var(--home-body-padding);
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 4rem;
}

.sl-home__title,
.sl-home-title__background {
  font-family: 'Fixel', sans-serif;
  font-weight: 900;
}

.sl-home__title {
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: center;
  padding-top: 10rem;
}

.sl-home-title__background {
  background-color: var(--marker-background-color);
  color: var(--marker-text-color);
  padding: 0.5rem;
}
</style>
