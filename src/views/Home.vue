<template>
  <div class="home bg-white" style="height: 100vh">
    <section v-if="files.length > 0" id="hero" class="align-items-center">
      <div id="carouselimages" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(imgfile, index) in files"
            :key="index"
            class="carousel-item"
            v-bind:class="{ active: index == 0 }"
          >
            <img :src="getImageUrl(index)" class="d-block w-100" alt="..." />
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
import axios from "axios";
export default {
  name: "Home",
  components: {
    Content,
    Navigation,
  },
  data() {
    return {
      files: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("/GetMediaFiles.php?PathName=home");
      this.files = res.data;
      this.files.sort((a, b) => a.Identifier.localeCompare(b.Identifier));
    } catch (_) {}
  },
  methods: {
    getImageUrl(index) {
      return axios.defaults.baseURL + "/" + this.files[index].FilePath;
    },
  },
};
</script>
<style scoped></style>
