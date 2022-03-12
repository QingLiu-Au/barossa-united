<template>
  <div v-if="menu.length > 0" class="navigation">
    <div
      v-for="(m, index) in menu"
      v-bind:key="m.RouteName"
      @click="linkClicked(index)"
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
import axios from "axios";
export default {
  name: "Navigation",
  props: {
    showImage: Boolean,
  },
  data() {
    return {
      // menu: [],
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
