import * as KEYS from '../fakeEnv';

export const OpenWeatherURL = (city, country = 'us', key = KEYS.OPEN_WEATHER_API_KEY) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${key}`;
export const GoogleMapsURL = (lat, long, key) =>
  `https://www.google.com/maps/embed/v1/view?key=${key}&center=${lat},${long}&zoom=10&maptype=satellite`;
