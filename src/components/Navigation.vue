<template>
  <header id="header" class="fixed-top d-flex align-items-cente">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark w-100 text-capitalize"
    >
      <div class="container-fluid">
        <img src="../assets/img/logo.png" style="height: 50px" />
        <!--  -->
        <a class="navbar-brand" href="#/" @click="linkClicked(0)"
          >Borassa United</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style="padding-right: 30px"
        >
          <div v-if="menu.length > 0" class="navbar-nav ms-auto">
            <div
              v-for="(m, index) in menu"
              v-bind:key="m.RouteName"
              @click="linkClicked(index)"
            >
              <router-link class="navi-link" :to="m.RoutePath">{{
                m.RouteName
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
        ? this.$store.state.routes.filter((_) => _.RoutePath != "/admin-portal")
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

<style>
#header .logo a {
  color: #fff;
}

.navi-link {
  text-decoration: none;
}
</style>
