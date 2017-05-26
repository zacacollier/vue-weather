<template lang="html">
    <form class="search" @submit="handleSubmit">
      <vue-google-autocomplete
        id="map"
        classname="form-control search-input"
        types='(cities)'
        placeholder="Search"
      >
      </vue-google-autocomplete>
      <input class="search-btn" type="submit" value="Go">
      <!-- <input class="search-input" type="text" v-model="value" placeholder="Search for your city"> -->
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
  box-shadow: none;
  outline: outset 1px rgba(201, 203, 201, 0.2);
  height: 30px;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  transition: all 0.20s ease-in-out;
  -webkit-transition: all 0.20s ease-in-out;
  -moz-transition: all 0.20s ease-in-out;
  -ms-transition: all 0.20s ease-in-out;
  -o-transition: all 0.20s ease-in-out;
}
.search .search-input:hover {
  outline: solid 2px rgba(201, 203, 201, 0.3);
  box-shadow: 0 0 5px rgba(201, 203, 201, 0.3);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
}
.search .search-input:focus {
  outline: solid 2px rgba(201, 203, 201, 0.6);
  box-shadow: 0 0 2px rgba(201, 203, 201, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
}
.search .search-btn {
  display: inline-block;
  padding: 0 15px;
  font-family: inherit;
  appearance: none;
  box-shadow: none;
  height: 20px;
  border-radius: 3px;
  background-color: rgba(44, 62, 80, 0.01);
  color: rgba(44, 62, 80, .8);
  transition: all 0.20s ease-in-out;
  -webkit-transition: all 0.20s ease-in-out;
  -moz-transition: all 0.20s ease-in-out;
  -ms-transition: all 0.20s ease-in-out;
  -o-transition: all 0.20s ease-in-out;
}
.search .search-btn:hover {
  background-color: rgba(44, 62, 80, .8);
  color: white;
}
</style>
