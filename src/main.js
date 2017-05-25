/* eslint-disable no-new */

import Vue from 'vue';
import App from './App';
import SearchResults from './components/SearchResults.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('search-results', SearchResults);
Vue.component('searchbar', {
  name: 'searchbar',
  template: `
    <form @submit="handleSubmit">
      <input v-model="value" type="text" placeholder="Search for your city">
      <input type="submit" value="Go">
    </form>
  `,
  store,
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
});
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: { App, },
});
