<template>
  <footer class="fixed-bottom" style="background-color: #212121">
    <div class="container">
      <div class="row text-center text-white text-capitalize">
        <div class="col-lg-6 col-md-4 mb-2 mb-md-0">
          connect with us on social media
        </div>
        <div class="col-lg-6 col-md-6 mb-2 mb-md-0">
          <div class="d-inline-flex p-2">
            <a href="#"
              ><font-awesome-icon :icon="['fab', 'facebook-square']"
            /></a>
          </div>
          <div class="d-inline-flex p-2">
            <a href="#"
              ><font-awesome-icon :icon="['fab', 'twitter-square']"
            /></a>
          </div>
          <div class="d-inline-flex p-2">
            <a href="#"
              ><font-awesome-icon :icon="['fab', 'instagram-square']"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row text-center text-white">
        <div class="col-12">
          <div class="footer-bottom__copyright">
            &COPY; Copyright 2022 | Barossa United Football Club
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
