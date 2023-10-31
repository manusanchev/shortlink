import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/link',
      name: 'link',
      component: () => import('../views/CopyLink.vue')
    },
    {
      path: '/:slug',
      name: 'redirect',
      component: () => import('../views/Redirect.vue')
    },
  ]
})

export default router
