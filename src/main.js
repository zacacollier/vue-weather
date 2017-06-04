/* eslint-disable no-new */
import Vue from 'vue';
import App from './App';
import SearchResults from './components/SearchResults.vue';
import SearchBar from './components/SearchBar.vue';
import GoogleMap from './components/GoogleMap.vue';
import WeatherChart from './components/WeatherChart.vue';
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import Trend from 'vuetrend';
import * as KEYS from './fakeEnv';
import * as VueGoogleMaps from 'vue2-google-maps';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('search-results', SearchResults);
Vue.component('search-bar', SearchBar);
Vue.component('vue-google-autocomplete', VueGoogleAutocomplete);
Vue.component('vue-embed-google-map', GoogleMap);
Vue.component('weather-chart', WeatherChart);

Vue.use(Trend);
Vue.use(VueGoogleMaps, {
  load: {
    key: KEYS.GOOGLE_PLACES_API_KEY,
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  },
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: { App, },
});
