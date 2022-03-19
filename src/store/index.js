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
    content: "",
    imagePath: [],
    sideImagesTag: "Main",
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
    setContent(state, payload) {
      state.content = payload;
    },
    setImagePath(state, payload) {
      state.imagePath = payload;
    },
    setSideImages(state, payload) {
      let pageIndex = state.routes.findIndex((_) => _.RoutePath == payload);
      let tag = pageIndex == -1 ? "Main" : state.routes[pageIndex].RouteName;
      let index = state.imagePath.findIndex((_) => _.PageName == tag);
      state.sideImagesTag =
        index == -1 ? "Main" : state.imagePath[index].PageName;
    },
  },
  actions: {
    getRoutes(state) {
      axios.get("/GetRoutes.php").then((res) => {
        state.commit("setRoutes", res.data);
      });
    },
    async getContent(state, payload) {
      const result = await axios.get(`/getpagecontent.php?PathName=${payload}`);
      if (result.data.length > 0) {
        state.commit("setContent", result.data[0].PageContent);
      }
    },
    async getImagePath(state) {
      const result = await axios.get("/GetMediaFiles.php?PathName=allpages");
      if (result.data) state.commit("setImagePath", result.data);
    },
  },
  modules: {},
});
