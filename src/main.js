import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueHtml5Editor from "vue-html5-editor";

Vue.config.productionTip = false;
Vue.use(VueHtml5Editor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
