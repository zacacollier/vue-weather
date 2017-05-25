<template lang="html">
    <form @submit="handleSubmit">
      <input v-model="value" type="text" placeholder="Search for your city">
      <input type="submit" value="Go">
    </form>
</template>

<script>
export default {
  name: 'searchbar',
  template: `
  `,
  computed: {
    value: {
      get () {
        return this.$store.state.search.value;
      },
      set (value) {
        this.$store.commit('searchValueChange', value);
      },
    },
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      return this.$store.dispatch('handleSearchSubmit', this.value);
    },
  },
};
</script>

<style lang="css">
</style>
