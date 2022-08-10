import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/search/:query",
      name: "searchresults",
      component: () => import("../pages/SearchResults.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../pages/404page.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../pages/TestPage.vue"),
    },
  ],
});

export default router;
