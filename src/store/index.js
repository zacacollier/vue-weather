import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true;

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
export default store;
