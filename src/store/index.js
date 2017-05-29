import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import * as C from '../constants';

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  plugins: [ createPersistedState(), ],
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
    API: {
      GoogleMaps: {
        cityName: '',
        state: '',
        country: '',
        cityData: {},
      },
      Weather: {
        cityData: {},
        weatherData: [],
      },
    },
  },
  mutations: {
    searchValueChange (state, payload) {
      state.search.value = payload;
    },
    searchStart (state, payload) {
      state.API.GoogleMaps.cityName = payload.locality;
      state.API.GoogleMaps.country = payload.country;
      state.API.GoogleMaps.state = payload.administrative_area_level_1;
      state.API.GoogleMaps.cityData = { ...state.API.GoogleMaps.cityData, latitude: payload.latitude, longitude: payload.longitude, };
      state.fetch.pending = true;
    },
    searchSuccess (state, res) {
      state.fetch.pending = false;
      state.fetch.results = res;
      state.API.Weather.cityData = { ...state.API.Weather.cityData, ...res.city, };
      state.API.Weather.weatherData = res.list;
    },
    searchError (state, err) {
      state.fetch.pending = false;
      state.fetch.error = err;
    },
  },
  actions: {
    handleSearchSubmit ({ commit, }, addressData) {
      console.log(addressData);
      commit('searchStart', addressData);
      axios.get(C.OpenWeatherURL(addressData.locality))
        .then(res => {
          console.log(res);
          commit('searchSuccess', res.data);
        })
        .catch(err => {
          console.log(err);
          commit('searchError', err);
        });
    },
    saveCity ({ commit, }, city) {
      console.log(city);
      const { latitude, longitude, } = city.cityData;
      axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
});
export default store;
