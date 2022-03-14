<template>
  <!-- <div v-if="menu.length > 0" class="navigation">
    <textra
      v-if="hover"
      :data="words"
      :timer="1"
      :infinite="true"
      filter="left-right"
    />
    <div
      v-for="(m, index) in menu"
      v-bind:key="m.RouteName"
      @click="linkClicked(index)"
      @mouseover="onhover"
      @mouseleave="leave"
    >
      <router-link class="navi-link" :to="m.RoutePath">{{
        m.RouteName.toLowerCase()
      }}</router-link>
    </div>
    <img
      v-if="showImage"
      src="../assets/BUFCShield_CMYK_FB-01.png"
      height="300px"
    />
  </div> -->

  <header id="header" class="fixed-top d-flex align-items-cente">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Borassa United</a>
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div v-if="menu.length > 0" class="navbar-nav">
            <div
              v-for="(m, index) in menu"
              v-bind:key="m.RouteName"
              @click="linkClicked(index)"
              @mouseover="onhover"
              @mouseleave="leave"
            >
              <router-link class="navi-link" :to="m.RoutePath">{{
                m.RouteName.toLowerCase()
              }}</router-link>
            </div>

            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            > -->
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
    onhover() {
      console.log("hover");
      this.hover = true;
    },
    leave() {
      this.hover = false;
    },
  },
};
</script>

<style>
#header .logo a {
  color: #fff;
}
/* img {
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
} */
</style>
