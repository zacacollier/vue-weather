import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as C from '../constants';

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  state: {
    search: {
      value: '',
    },
    fetch: {
      pending: false,
      success: false,
      error: '',
      results: [],
    },
  },
  mutations: {
    searchValueChange (state, payload) {
      state.search.value = payload;
    },
    searchStart (state) {
      state = { ...state, fetch: { ...state.fetch, pending: true, }, };
    },
    searchSuccess (state, data) {
      console.log(data);
      state = { ...state, fetch: { ...state.fetch, pending: false, results: [ ...state.fetch.results, data, ], }, };
    },
    searchError (state, err) {
      state = { ...state, fetch: { ...state.fetch, pending: false, error: err, }, };
    },
  },
  actions: {
    handleSearchSubmit ({ commit, }, query) {
      commit('searchStart');
      axios.get(C.OpenWeatherURL(query))
        .then(res => {
          console.log(res);
          commit('searchSuccess', res.data);
        })
        .catch(err => commit('searchError', err));
    },
  },
});
export default store;
