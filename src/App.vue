<template>
  <div id="app">
    <div id="get-loading" v-if="$store.state.loading">
      <img id="get-loader" height="120" src="./assets/loader.gif" />
    </div>
    <Navigation id="navi" :showImage="true" />

    <div>
      <section class="d-flex col">
        <div class="d-none d-md-block" style="left: 0; width: 20%">
          <img :src="getSideImage('A')" />
        </div>
        <div class="d-none d-sm-block d-md-none" style="left: 0; width: 10%">
          <img :src="getSideImage('A')" style="object-position: center" />
          <!-- <img src="./assets/img/r-left.jpg" /> -->
        </div>
        <article class="bg-white" style="width: 60%, height: 100vh;">
          <!-- name="fade" -->
          <!-- @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
          :name="transitionName" -->
          <transition name="route" mode="out-in">
            <router-view v-slot="{ Component }" :key="key">
              <component ref="routerView" :is="Component" />
            </router-view>
          </transition>
        </article>
        <div class="d-none d-md-block" style="right: 0; width: 20%">
          <img :src="getSideImage('B')" />
        </div>
        <div class="d-none d-sm-block d-md-none" style="right: 0; width: 10%">
          <img :src="getSideImage('B')" />

          <!-- <img src="./assets/img/r-right.jpg" /> -->
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";

const DEFAULT_TRANSITION = "fade";
export default {
  data() {
    return {
      loaded: false,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  computed: {
    key() {
      return this.$route.path.replace(/\//g, "_");
    },
  },
  watch: {},
  components: {
    Footer,
    Navigation,
  },
  created() {
    this.$store.dispatch("getRoutes");
    this.$store.dispatch("getImagePath");
    this.getUserSecret();
  },
  methods: {
    getUserSecret() {
      const user = window.sessionStorage.getItem("borassa-user");
      if (user) {
        this.$store.commit("setUserGroup", "admin");
      }
    },
    getSideImage(identifier) {
      let tag = this.$store.state.sideImagesTag;
      if (tag == "Home") tag = "Main";
      let path = this.$store.state.imagePath.find(
        (_) => _.PageName == tag && _.Identifier == identifier
      );
      if (path) return axios.defaults.baseURL + "/" + path.FilePath;
    },
  },
};
</script>
<style>
#get-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}

#get-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
body {
  margin: 0px;
}
/* 
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */

.route-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
/* Create two columns/boxes that floats next to each other */
#navi {
  background: #00000060;
}

/* Clear floats after the columns */
section::after {
  content: "";
  display: table;
  clear: both;
}

/* Style the footer */
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}
</style>
