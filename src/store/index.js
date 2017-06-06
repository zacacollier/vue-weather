import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import state from './initialState';
import mutations from './mutations';
import axios from 'axios';
import * as C from '../constants';

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  plugins: [ createPersistedState(), ],
  /* ./initialState.js, */
  state,
  /* ./mutations.js, */
  mutations,
  getters: {
    highs: (state) => state.API.Weather.weatherData
      .map(data =>
        parseInt(C.KToF(data.main.temp_max)))
      .filter(d => d),
    lows: (state) => state.API.Weather.weatherData
      .map(data =>
        parseInt(C.KToF(data.main.temp_min)))
      .filter(d => d),
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
