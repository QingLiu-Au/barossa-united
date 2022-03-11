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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
