import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../pages/Homeview/index.vue'
import Loginview from '../pages/Loginview/index.vue'  
import Registerview from '../pages/Registerview/index.vue'
import Pagenotview from '../pages/Pagenotview/index.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: Homeview,
    },

    {
      path: '/login',
      name: 'login',
      component: Loginview,
    },

    {
      path: '/register',
      name: 'register',
      component: Registerview,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Pagenotview, 
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router