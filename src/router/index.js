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
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/presidents-welcome",
    name: "President Welcome",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/fees-registration",
    name: "Fees Registration",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/newsletters",
    name: "Newsletters",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/player-info",
    name: "Player Info",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/policies",
    name: "Policies",
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
