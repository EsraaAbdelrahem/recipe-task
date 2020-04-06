import Vue from "vue";
import VueRouter from "vue-router";
import loginPage from "../views/loginPage.vue";
import recipePage from "../views/recipePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: loginPage
  },
  {
    path: "/recipe",
    name: "recipePage",
    component: recipePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
