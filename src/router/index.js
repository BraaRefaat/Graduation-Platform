import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import computerView from "../views/computerView.vue";
import examView from "../views/examView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/computer-course",
    name: "computer_course",
    component: computerView,
  },
  {
    path: "/exam",
    name: "exam",
    component: examView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
