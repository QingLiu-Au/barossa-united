<template>
  <div class="home">
    <Navigation id="navi" :showImage="true" :linkClicked="linkClicked" />
    <section>
      <article>
        <Content msg="Welcome to Your Vue.js App" />
      </article>
    </section>

    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Content from "@/components/Content.vue";
import Navigation from "../components/Navigation.vue";
export default {
  name: "Content-Page",
  components: {
    Content,
    Navigation,
  },
  methods: {
    linkClicked(route) {
      console.log(route);
    },
  },
};
</script>
<style scoped>
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
  background-color: #fff;
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
