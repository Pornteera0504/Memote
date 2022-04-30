import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Landing from "../views/Landing.vue";
import Edit from "../views/Edit.vue";
import Tasks from "../views/Tasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Main",
    component: Landing,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/category/:name",
    name: "Tasks",
    component: Tasks,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
