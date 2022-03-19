<template>
  <div class="container my-5 p-5" style="width: 60vw">
    <div class="d-flex justify-content-evenly mb-5">
      <button
        @click="selectedFunction = 'admin'"
        type="button"
        class="btn btn-success"
      >
        Admin Users
      </button>
      <button
        @click="selectedFunction = 'page'"
        type="button"
        class="btn btn-success"
      >
        Page
      </button>
      <button
        @click="selectedFunction = 'content'"
        type="button"
        class="btn btn-success"
      >
        Page Content
      </button>
      <button
        @click="selectedFunction = 'media'"
        type="button"
        class="btn btn-success"
      >
        Media Library
      </button>
    </div>
    <FileUpload v-if="selectedFunction == 'media'" />
    <div v-if="selectedFunction == 'content'">
      <v-select
        :options="menu"
        label="RouteName"
        class="my-3"
        v-model="selectedRoute"
        @input="selected"
      ></v-select>
      <vue-editor v-model="content"></vue-editor>
      <input type="button" @click="submit()" value="Submit" />
    </div>
    <div v-if="selectedFunction == ''">
      <p>Welcome Admin User</p>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import FileUpload from "../components/Admin/Upload-File.vue";
import axios from "axios";

export default {
  components: {
    VueEditor,
    FileUpload,
  },

  data() {
    return {
      content: "",
      menu: [],
      selectedRoute: null,
      selectedFunction: "",
    };
  },

  async created() {
    // check user group
    if (this.$store.state.userGroup != "admin") {
      this.$router.push("/");
    }
    this.$store.commit("setPath", "/admin-page");
    // await this.getRoutes();
    this.menu = this.$store.state.routes.filter((_) => _.Public === "1");
    this.$store.commit("setLoading", false);
  },

  methods: {
    submit() {
      let c = this.content.split("<img src=");
      this.content = c.join("<img class='img-fluid' src=");
      // this.content.replace(
      //   "<img src=",
      //   "<img class='img-fluid' src="
      // );
      let page = {
        routeID: this.selectedRoute.RouteID,
        page: this.selectedRoute.RouteName,
        pageContent: this.content,
      };

      axios.post("/ManagePageContent.php", page);
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
