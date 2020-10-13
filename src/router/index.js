import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchBreed from "../views/SearchBreed.vue";
import SubBreed from "../views/SubBreed";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/subbreed",
    name: "SubBreed",
    component: SubBreed
  },
  {
    path: "/searchbreed",
    name: " SearchBreed",
    component: SearchBreed
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
