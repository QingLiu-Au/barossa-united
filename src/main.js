import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// import 3rd party css
import "@/assets/ql-editor.css";
import "@/assets/css/style.css";
import "@/assets/css/animate.css/animate.min.css";
import "@/assets/css/aos/aos.css";
import "@/assets/css/glightbox/css/glightbox.min.css";
import "@/assets/css/swiper/swiper-bundle.min.css";
// import "@/assets/css/"

import "popper.js/dist/popper.min.js";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Textra from "vue-textra";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitterSquare);
library.add(faFacebookSquare);
library.add(faInstagramSquare);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(Textra);

Vue.config.productionTip = false;

Vue.component("v-select", vSelect);

// set base URL
axios.defaults.baseURL = "https://borassaunitedsvr.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8082/5work/barossa-united";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    store.commit("setLoading", true);
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
