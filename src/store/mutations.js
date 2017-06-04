export default {
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
};
