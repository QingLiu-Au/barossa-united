<template>
  <div>
    <GmapMap :center="center" :zoom="16" style="width: 100%; height: 300px" />
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
    };
  },
  mounted() {
    this.geolocate();
    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({ lat: 1.38, lng: 103.8 });
    // });
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: -34.46538423648841,
          lng: 139.00262637301324,
        };
      });
    },
  },
};
</script>
