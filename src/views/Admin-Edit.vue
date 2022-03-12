<template>
  <div class="container m-5 p-5">
    <v-select
      :options="menu"
      label="RouteName"
      v-model="selectedRoute"
      @input="selected"
    ></v-select>
    <vue-editor v-model="content"></vue-editor>
    <input type="button" @click="submit()" value="Submit" />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      content: "",
      menu: [],
      selectedRoute: null,
    };
  },
  async created() {
    // check user group
    if (this.$store.state.userGroup != "admin") {
      this.$router.push("/");
    }
    this.$store.commit("setPath", "/admin-page");
    await this.getRoutes();
  },
  methods: {
    async getRoutes() {
      const res = await axios.get("/Routes.php");
      this.menu = res.data.filter((_) => _.Public === "1");
    },
    submit() {
      let page = {
        routeID: this.selectedRoute.RouteID,
        page: this.selectedRoute.RouteName,
        pageContent: this.content,
      };

      axios.post("/PageContent.php", page);
    },
    async selected() {
      const result = await axios.get(
        `/getpagecontent.php?PathName=${this.selectedRoute.RoutePath}`
      );
      if (result.data.length > 0) {
        this.content = result.data[0].PageContent;
      }
    },
  },
};
</script>
