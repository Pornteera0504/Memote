import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Landing from "../views/Landing.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    name: "Main",
    component: Landing,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
