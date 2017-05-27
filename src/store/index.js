import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as C from '../constants';
import _ from 'lodash';

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
    city: {
      GoogleMaps: {
        cityName: '',
        state: '',
        country: '',
        cityData: {},
      },
      WeatherAPI: {
        cityData: '',
        weatherData: [],
      },
    },
  },
  mutations: {
    searchValueChange (state, payload) {
      state.search.value = payload;
    },
    searchStart (state, payload) {
      console.log(arguments);
      state.city.GoogleMaps.cityName = payload.locality;
      state.city.GoogleMaps.country = payload.country;
      state.city.GoogleMaps.state = payload.administrative_area_level_1;
      state.city.GoogleMaps.cityData = _.assign(state.city.GoogleMaps.cityData, [ payload.latitude, payload.longitude, ]);
      state.fetch.pending = true;
    },
    searchSuccess (state, res) {
      state.fetch.pending = false;
      state.fetch.results = res;
      state.city.WeatherApi.cityData = res.city;
      state.city.WeatherApi.weatherData = res.list;
    },
    searchError (state, err) {
      state.fetch.pending = false;
      state.fetch.error = err;
    },
  },
  actions: {
    handleSearchSubmit ({ commit, }, addressData) {
      commit('searchStart', addressData);
      axios.get(C.OpenWeatherURL(addressData.locality))
        .then(res => {
          console.log(res);
          commit('searchSuccess', res.data);
        })
        .catch(err => commit('searchError', err));
    },
    saveCity ({ commit, }, city) {
      console.log(city);
      const { coord, } = city.cityData;
      axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${coord.lat},${coord.lon}&sensor=false`)
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
