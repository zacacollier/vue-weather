<template>
  <div @click="handleClick" id="search-results">
    <h2>{{ city.cityName ? city.cityName : "" }}</h2>
    <h3>{{ city.country ? city.country : "" }}</h3>
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
  methods: {
    handleClick (e) {
      return this.$store.dispatch('saveCity', this.city);
    },
  },
};
</script>

<style scoped>
</style>
