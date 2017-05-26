<template lang="html">
    <form class="search" @submit="handleSubmit">
      <input class="search-input" type="text" v-model="value" placeholder="Search for your city">
      <input class="search-btn" type="submit" value="Go">
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

<style scoped>
.search {
  width: 100%;
  padding: 0 30px;
  font-family: inherit;
}
.search .search-input {
  width: 50%;
  border: none;
  border-bottom: solid 2px #c9c9c9;
  box-shadow: none;
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  transition: all 0.30s ease-in-out;
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
}
.search .search-input:focus {
  border-bottom: solid 2px #969696;
  box-shadow: 0 0 5px rgba(201, 203, 201, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
}
.search .search-btn {
  display: inline-block;
  padding: 0 15px;
  font-family: inherit;
  appearance: none;
  box-shadow: none;
  border-radius: 3px;
  background-color: rgba(201, 203, 201, 1);
}
</style>
