<template>
  <div v-if="menu.length > 0" class="navigation">
    <textra
      v-if="hover"
      :data="words"
      :timer="1"
      :infinite="true"
      filter="left-right"
    />
    <div
      v-for="(m, index) in menu"
      v-bind:key="m.RouteName"
      @click="linkClicked(index)"
      @mouseover="onhover"
      @mouseleave="leave"
    >
      <!-- @click="$emit('linkClicked')" -->
      <router-link class="navi-link" :to="m.RoutePath">{{
        m.RouteName.toLowerCase()
      }}</router-link>
    </div>
    <img
      v-if="showImage"
      src="../assets/BUFCShield_CMYK_FB-01.png"
      height="300px"
    />
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    showImage: Boolean,
  },
  data() {
    return {
      words: ["home page"],
      hover: false,
    };
  },
  computed: {
    menu() {
      return this.$store.state.userGroup == "admin"
        ? this.$store.state.routes
        : this.$store.state.routes.filter((_) => _.Public === "1");
    },
  },
  created() {
    //const res = await axios.get("/Routes.php");
  },
  methods: {
    linkClicked(index) {
      this.$store.commit("setPath", this.menu[index].RoutePath);
    },
    onhover() {
      console.log("hover");
      this.hover = true;
    },
    leave() {
      this.hover = false;
    },
  },
};
</script>

<style scoped>
img {
  margin: 50px 0px 0px 100px;
}
.navigation {
  margin-top: 50px;
  float: left;
  width: 30%;
}
.navi-link {
  text-decoration: none;
  margin-left: 100px;
  margin-top: 20px;
  font-size: 1.8em;
}
</style>
