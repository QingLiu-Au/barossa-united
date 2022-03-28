import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContentPage from "../views/Content-Page.vue";
import store from "../store/index";

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
    component: ContentPage,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Content-Page.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: ContentPage,
  },
  {
    path: "/presidents-welcome",
    name: "President Welcome",
    component: ContentPage,
  },
  {
    path: "/fees-registration",
    name: "Fees Registration",
    component: ContentPage,
  },
  {
    path: "/newsletters",
    name: "Newsletters",
    component: ContentPage,
  },
  {
    path: "/player-info",
    name: "Player Info",
    component: ContentPage,
  },
  {
    path: "/policies",
    name: "Policies",
    component: ContentPage,
  },
  {
    path: "/page1",
    name: "Hidden-page1",
    component: ContentPage,
  },
  {
    path: "/page2",
    name: "Hidden-page2",
    component: ContentPage,
  },
  {
    path: "/page3",
    name: "Hidden-page3",
    component: ContentPage,
  },
  {
    path: "/page4",
    name: "Hidden-page4",
    component: ContentPage,
  },
  {
    path: "/page5",
    name: "Hidden-page5",
    component: ContentPage,
  },
  {
    path: "/admin-page",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin-Edit.vue"),
  },
  {
    path: "/admin-portal",
    name: "Admin Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin-Portal.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(`to ${to.fullPath}, state ${store.state.path}`);
  let path = store.state.routes.find((_) => _.RoutePath === to.path);
  if (path) {
    if (path.Hidden == "0") {
      store.commit("setSideImages", to.path);
      next();
    } else {
      store.commit("setSideImages", "/home");
      // next({ path: "/" });
      next("/");
    }
  }
  next();
});

export default router;
