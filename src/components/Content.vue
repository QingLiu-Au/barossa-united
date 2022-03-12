<template>
  <div
    class="ql-editor bg-white"
    v-html="content"
    style="background: white"
  ></div>
</template>

<script>
import axios from "axios";

export default {
  name: "Content",
  props: {
    msg: String,
  },
  data() {
    return {
      content: null,
    };
  },
  async created() {
    await this.getContent();
  },
  methods: {
    async getContent() {
      const result = await axios.get(
        `/getpagecontent.php?PathName=${this.$route.path}`
      );
      if (result.data.length > 0) {
        this.content = result.data[0].PageContent;
      }
    },
  },
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
