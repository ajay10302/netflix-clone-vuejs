import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      redirect: '/browse',
    },

    {
      path: '/login',
      name: 'login',
      component: () => "login",
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => "signup",
    },

    {
      path: '/browse',
      name: 'browse',
      component: () => "browse",
    },

    {
      path: '/movie/:id',
      name: 'movie-details',
      component: () => "movie details",
    },

    {
      path: '/search',
      name: 'search',
      component: () => "search",
    },

    {
      path: '/my-list',
      name: 'my-list',
      component: () => "my-list",
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => "not found", 
    },
  ],
})

export default router