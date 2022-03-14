<template>
  <div class="bg-white">
    <Content ref="updateContent" />
  </div>
</template>
<script>
// @ is an alias to /src
import Content from "../components/Content.vue";
import Navigation from "../components/Navigation.vue";
export default {
  name: "Content-Page",
  components: {
    Content,
    Navigation,
  },
};
</script>
<style scoped></style>
