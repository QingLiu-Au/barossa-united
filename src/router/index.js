import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Content",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/history",
    name: "Content",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/presidents-welcome",
    name: "Content",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/fees-registration",
    name: "Content",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/newsletters",
    name: "Content",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin-Edit.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
