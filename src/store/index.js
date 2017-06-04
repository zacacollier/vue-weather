import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import initialState from './initialState';
import mutations from './mutations';
import axios from 'axios';
import * as C from '../constants';

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  plugins: [ createPersistedState(), ],
  state: initialState,
  mutations,
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
