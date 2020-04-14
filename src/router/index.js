import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login.vue";
import home from "../components/home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/home", component: home }
];

const router = new VueRouter({
  routes
});

export default router;
