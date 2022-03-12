import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    path: "/",
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
  },
  actions: {},
  modules: {},
});
