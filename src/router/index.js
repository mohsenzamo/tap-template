import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/index.vue') },
    { path: '/task', component: () => import('../views/task.vue') },
    { path: '/account', component: () => import('../views/account.vue') },
  ]
})

export default router
