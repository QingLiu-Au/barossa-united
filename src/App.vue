<template>
  <div id="app">
    <section>
      <article>
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
      <Navigation id="navi" :showImage="true" />
      <!-- @linkClicked="linkClicked" -->
    </section>

    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

const DEFAULT_TRANSITION = "fade";
export default {
  data() {
    return {
      //prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  computed: {
    key() {
      return this.$route.path.replace(/\//g, "_");
    },
  },
  components: {
    Navigation,
  },
  created() {
    // this.$router.beforeEach((to, from, next) => {
    //   let transitionName = to.meta.transitionName || from.meta.transitionName;
    //   if (transitionName === "slide") {
    //     const toDepth = to.path.split("/").length;
    //     const fromDepth = from.path.split("/").length;
    //     transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    //   }
    //   this.transitionName = transitionName || DEFAULT_TRANSITION;
    //   next();
    // });
  },
  methods: {
    // beforeLeave(element) {
    //   this.// = getComputedStyle(element).height;
    // },
    // enter(element) {
    //   const { height } = getComputedStyle(element);
    //   element.style.height = this.//;
    //   setTimeout(() => {
    //     element.style.height = height;
    //   });
    // },
    // afterEnter(element) {
    //   element.style.height = "auto";
    // },
  },
};
</script>
<style>
body {
  margin: 0px;
}

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
}

.route-enter {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.8s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.8s ease-in;
}
/* Create two columns/boxes that floats next to each other */
#navi {
  float: left;
  width: 30%;
  background: #fff;
}

/* Style the list inside the menu */
#navi ul {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  width: 70%;
  background-color: #f1f1f1;
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

/* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
@media (max-width: 600px) {
  nav,
  article {
    width: 100%;
    height: auto;
  }
}
</style>
