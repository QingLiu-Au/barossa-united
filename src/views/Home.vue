<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Content ref="routerView" />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "../components/Content.vue";
import Navigation from "../components/Navigation.vue";
export default {
  name: "Home",
  components: {
    Content,
    Navigation,
  },
  methods: {
    appClicked(route) {
      console.log(route);
    },
  },
};
</script>
<style scoped></style>
