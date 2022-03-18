<template>
  <div class="home bg-white" style="height: 100vh">
    <section id="hero" class="align-items-center">
      <div id="carouselimages" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/1-2016.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="../assets/img/5.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/img/7.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselimages"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselimages"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card mx-5" style="top: -50px">
        <Content ref="routerView" style="padding-top: 0px" />
      </div>
    </section>
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
  methods: {},
};
</script>
<style scoped></style>
