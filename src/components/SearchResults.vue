<template>
  <div id="search-results">
    <h1>{{ city.cityName ? city.cityName : "" }}</h1>
    <h2>{{ city.country ? city.country : "" }}</h2>
  </div>
</template>

<script>
export default {
  name: 'search-results',
  computed: {
    city () {
      return this.$store.state.weather.selectedCity;
    },
  },
};
</script>

<style scoped>
</style>
