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
       meta: {
        title: 'Netflix Clone - Home',
        description: 'Watch movies and TV shows online.',
      },
    },

    {
      path: '/login',
      name: 'login',
      component: Loginview,
      meta: {
        title: 'Login - Netflix Clone',
        description: 'Login to your Netflix Clone account.',
      },
    },

    {
      path: '/register',
      name: 'register',
      component: Registerview,
      meta: {
        title: 'Register - Netflix Clone',
        description: 'Create your Netflix Clone account.',
      },
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


router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Netflix Clone'

  let description = document.querySelector(
    'meta[name="description"]'
  ) as HTMLMetaElement | null

  if (!description) {
    description = document.createElement('meta')
    description.name = 'description'
    document.head.appendChild(description)
  }

  description.content =
    (to.meta.description as string) ||
    'Watch movies and TV shows online.'
})


export default router