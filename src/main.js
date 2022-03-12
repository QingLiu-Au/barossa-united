import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import "@/assets/ql-editor.css";

Vue.config.productionTip = false;

Vue.component("v-select", vSelect);

axios.defaults.baseURL = "http://localhost:8082/5work/barossa-united";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // store.commit("setLoading", true);
    return config;
  },
  function (error) {
    setTimeout(function () {
      store.commit("setLoading", false);
    }, 1000);

    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    setTimeout(function () {
      store.commit("setLoading", false);
    }, 1000);

    return response;
  },
  function (error) {
    setTimeout(function () {
      store.commit("setLoading", false);
    }, 1000);

    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
