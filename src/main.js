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
  },
});

Vue.component('searchbar', {
  name: 'searchbar',
  template: `
    <div>
      <input v-model="value" placeholder="sup">
    </div>
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
});
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: { App, },
});
