<template>
  <div class="container text-black">
    <div class="text-center">
      <h3>Pages Manage</h3>
    </div>
    <div class="mb-3" v-for="(page, i) in pages" :key="i">
      <input type="text" class="mr-5" v-model="page.RouteName" />
      <input type="radio" v-model="page.Hidden" value="0" /> Show
      <input type="radio" v-model="page.Hidden" value="1" /> Hidden
      <!-- <span><strong>{{ page.RouteName }}</strong></span> -->
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-success" v-on:click="update">
        Update
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PageManage",
  data() {
    return {
      pages: [],
    };
  },
  mounted() {
    this.pages = this.$store.state.routes;
  },

  methods: {
    async update() {
      await axios.post("/ManageRoute.php", JSON.stringify(this.pages));
    },
  },
};
</script>
