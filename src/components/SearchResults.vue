<template>
  <div id="search-results">
    <h1>{{ results.city.name }}</h1>
    <h2>{{ results.city.country }}</h2>
  </div>
</template>

<script>
export default {
  name: 'search-results',
  computed: {
    results () {
      return this.$store.state.fetch.results;
    },
  },
};
</script>

<style scoped>
</style>
