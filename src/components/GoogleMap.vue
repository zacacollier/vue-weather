<template>
  <gmap-map
    class="vue-map-container"
    :center="center"
    :zoom="15"
    style="width: 300px; height: 300px"
  >
  </gmap-map>
</template>

<script>
export default {
  name: 'vue-embed-google-map',
  computed: {
    center () {
      const { cityData, } = this.$store.state.API.GoogleMaps;
      return { lat: cityData.latitude, lng: cityData.longitude, };
    },
  },
};
</script>

<style scoped>
.vue-map-container {
  display: inline-block;
  border-radius: 50px;
}
</style>
