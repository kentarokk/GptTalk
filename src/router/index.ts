import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "top",
    component: async () => {
      const top = await import("@/pages/TalkPage.vue");
      return top;
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
