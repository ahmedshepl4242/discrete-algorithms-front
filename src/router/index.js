import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: "https://discrete-algorithms-front.vercel.app/",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/chine",
      name: "chine",
      component: () => import("../components/chines.vue"),
    },
    {
      path: "/gcd",
      name: "gcd",
      component: () => import("../components/gcd.vue"),
    },
    {
      path: "/lcm",
      name: "lcm",
      component: () => import("../components/lcm.vue"),
    },
    {
      path: "/prime",
      name: "prime",
      component: () => import("../components/prime-factors.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
