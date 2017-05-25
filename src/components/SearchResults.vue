<template>
  <div id="search-results">
  </div>
</template>

<script>
export default {
  name: 'search-results',
  computed: {
    get () {
      return this.$store.state.fetch.results;
    },
  },
};
</script>

<style scoped>
</style>
