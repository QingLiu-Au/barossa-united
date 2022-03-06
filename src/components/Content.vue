<template>
  <div v-html="content"></div>
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
    const result = await axios.get(
      `/getpagecontent.php?PathName=${this.$route.path}`
    );
    this.content = result.data[0].PageContent;
    console.log(this.$route.path);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ql-align-center {
  text-align: center;
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
