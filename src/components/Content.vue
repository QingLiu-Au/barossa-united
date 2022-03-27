<template>
  <div class="container" style="height: 100vh">
    <div
      id="conetent-in"
      class="bg-white ql-editor sized-box"
      v-html="content"
      style="color: black"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    msg: String,
  },
  computed: {
    content() {
      return this.$store.state.content;
    },
  },
  created() {
    // this.$store.dispatch("getContent", this.$route.path);
  },
  methods: {},
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
