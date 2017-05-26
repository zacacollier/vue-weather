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
    weather: {
      selectedCity: {
        cityName: '',
        state: '',
        country: '',
        cityData: {},
        weatherData: [],
      },
    },
  },
  mutations: {
    searchValueChange (state, payload) {
      state.search.value = payload;
    },
    searchStart (state, city, country = 'us') {
      state.weather.selectedCity.cityName = city;
      state.weather.selectedCity.country = country;
      state.fetch.pending = true;
    },
    searchSuccess (state, res) {
      state.fetch.pending = false;
      state.fetch.results = res;
      state.weather.selectedCity.cityData = res.city;
      state.weather.selectedCity.weatherData = res.list;
    },
    searchError (state, err) {
      state.fetch.pending = false;
      state.fetch.error = err;
    },
  },
  actions: {
    handleSearchSubmit ({ commit, }, city) {
      commit('searchStart', city);
      axios.get(C.OpenWeatherURL(city))
        .then(res => {
          console.log(res);
          // axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${},${}&sensor=false`)
          commit('searchSuccess', res.data);
        })
        .catch(err => commit('searchError', err));
    },
  },
});
export default store;
