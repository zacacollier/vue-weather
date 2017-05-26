import * as KEYS from '../fakeEnv';

export const OpenWeatherURL = (city, country = 'us', key = KEYS.OPEN_WEATHER_API_KEY) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${key}`;

export const WundergroundURL = (city, state, country = 'us', key = KEYS.WUNDERGROUND_API_KEY) =>
  `http://api.wunderground.com/api/a749d9416c441a99/forecast/q/${state}/${city}.json`;

export const GoogleMapsURL = (lat, long, key = KEYS.GOOGLE_MAPS_API_KEY) =>
  `https://www.google.com/maps/embed/v1/view?key=${key}&center=${lat},${long}&zoom=10&maptype=satellite`;

export const GoogleGeocodeURL = (lat, long, key = KEYS.GOOGLE_GEOCODE_API_KEY) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=${key}`;
