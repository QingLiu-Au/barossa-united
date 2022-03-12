import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    path: "/",
    userGroup: "customer",
    routes: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setPath(state, payload) {
      if (state.path != payload) {
        state.path = payload;
        state.loading = true;
      }
    },
    setUserGroup(state, payload) {
      state.userGroup = payload;
    },
    setRoutes(state, payload) {
      state.routes = payload;
    },
  },
  actions: {
    getRoutes(state) {
      axios.get("/Routes.php").then((res) => {
        state.commit("setRoutes", res.data);
      });
    },
  },
  modules: {},
});
