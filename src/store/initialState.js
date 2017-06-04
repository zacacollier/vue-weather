export default {
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
};
