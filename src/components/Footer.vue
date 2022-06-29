<template>
  <footer class="fixed-bottom" style="background-color: #212121">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 mb-1 mb-md-0">
          <div class="text-white text-capitalize">
            connect with us on social media
          </div>
          <div class="d-inline-flex fa-lg">
            <div class="p-2">
              <a href="#"
                ><font-awesome-icon :icon="['fab', 'facebook-square']"
              /></a>
            </div>
            <div class="p-2">
              <a href="#"
                ><font-awesome-icon :icon="['fab', 'twitter-square']"
              /></a>
            </div>
            <div class="p-2">
              <a href="#"
                ><font-awesome-icon :icon="['fab', 'instagram-square']"
              /></a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 mb-2 mb-md-0">
          <div class="text-white text-capitalize">postal address:</div>
          <div class="text-primary">PO Box 775, Nuriootpa SA 5355</div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row text-center text-white">
        <div class="col-12">
          <div class="footer-bottom__copyright">
            &COPY; Copyright 2022 | Barossa United Football Club
          </div>
        </div>
      </div>
    </div> -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
