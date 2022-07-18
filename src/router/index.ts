import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

//const home = {import: '../pages/HomeView.vue'}
//const about = {import: '../pages/AboutView.vue'}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue')
    },
    {
        path: '/search/:query',
        name: 'searchresults',
        component: () => import('../pages/SearchResults.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../pages/404page.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../pages/TestPage.vue')
    }
  ]
})

export default router
