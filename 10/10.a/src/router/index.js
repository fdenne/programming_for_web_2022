import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Plant from '../views/Plant.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/plant/:slug',
      name: 'plant',
      component: Plant
    }
  ]
})

export default router
