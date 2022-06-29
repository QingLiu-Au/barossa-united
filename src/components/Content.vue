<template>
  <div class="container" style="height: 100vh">
    <!-- <GoogleMap v-if="showMap" /> -->
    <div
      id="conetent-in"
      class="bg-white ql-editor sized-box"
      v-html="content"
      style="color: black"
    ></div>
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap.vue";
export default {
  name: "Content",
  props: {
    msg: String,
  },
  components: {
    GoogleMap,
  },
  computed: {
    content() {
      return this.$store.state.content;
    },
    showMap() {
      return this.$store.state.path == "/contact";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sized-box::-webkit-scrollbar {
  width: 0 !important;
}

.sized-box::before {
  display: block;
  content: " ";
  height: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
