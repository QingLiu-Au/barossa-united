<template>
  <div class="container my-5 py-5" style="height: 100vh">
    <div class="bg-white ql-editor" v-html="content"></div>
    <!-- style="overflow: hidden" -->
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
    this.$store.dispatch("getContent", this.$route.path);
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
