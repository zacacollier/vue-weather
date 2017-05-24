// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.config.devtools = true;

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    search: {
      value: '',
    },
    fetch: {
      // e.g. Search, WeatherAPI
      source: '',
      pending: false,
      success: false,
      error: '',
    },
  },
  mutations: {
    searchValueChange (state, payload) {
      state.search.value = payload;
    },
    handleSearchSubmit (state, payload) {
      console.log(payload);
      // state = { ...state, fetch: { ...state.fetch, pending: true, }, };
    },
  },
});

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
      return this.$store.commit('handleSearchSubmit', this.value);
    },
  },
});
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: { App, },
});
