/* eslint-disable no-new */
import Vue from 'vue';
import App from './App';
import SearchResults from './components/SearchResults.vue';
import SearchBar from './components/SearchBar.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('search-results', SearchResults);
Vue.component('search-bar', SearchBar);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: { App, },
});
