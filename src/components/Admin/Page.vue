<template>
  <div class="container">
    <div class="text-center">
      <h3>Pages Manage</h3>
    </div>
    <div class="mb-3" v-for="(page, i) in pages" :key="i">
      <input type="text" class="mr-5" :value="page.RouteName" disabled />
      <input type="radio" v-model="page.Public" value="0" /> Hide
      <input type="radio" v-model="page.Public" value="1" /> Show
      <!-- <span><strong>{{ page.RouteName }}</strong></span> -->
    </div>
  </div>
</template>

<script>
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

  methods: {},
};
</script>
