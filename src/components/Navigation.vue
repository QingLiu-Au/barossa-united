<template>
  <div v-if="menu.length > 0" class="navigation">
    <div v-for="m in menu" v-bind:key="m.RouteName">
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
      menu: [],
    };
  },
  async created() {
    const res = await axios.get("/Routes.php");
    this.menu = res.data.filter((_) => _.Public === "1");
  },
  methods: {},
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
