// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex, {mapState, } from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vuex.Store({
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
      <input placeholder="sup">
    </div>
  `,
  computed: mapState({
    value: state => state.search.value,
  }),
});
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: { App, },
});
