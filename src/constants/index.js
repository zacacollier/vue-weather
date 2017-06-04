import * as KEYS from '../fakeEnv';
import _ from 'lodash';

export const OpenWeatherURL = (city, country = 'us', key = KEYS.OPEN_WEATHER_API_KEY) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${key}`;

export const WundergroundURL = (city, state, country = 'us', key = KEYS.WUNDERGROUND_API_KEY) =>
  `http://api.wunderground.com/api/a749d9416c441a99/forecast/q/${state}/${city}.json`;

export const GoogleMapsURL = (lat, long, key = KEYS.GOOGLE_MAPS_API_KEY) =>
  `https://www.google.com/maps/embed/v1/view?key=${key}&center=${lat},${long}&zoom=10&maptype=satellite`;

export const GoogleGeocodeURL = (lat, long, key = KEYS.GOOGLE_GEOCODE_API_KEY) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=${key}`;

/*  Find a given [predicate] within an Array([seq])
 *  @param { Array } seq : Array to search within
 *  @param { * }  predicate : Search criteria
 */
export const findInSeq = (seq, predicate) => _.find(seq, predicate);

export const has = (o, path) => _.has(o, path);

// ℉ =(K - 273.15)* 1.8000 + 32.00
export const KToF = k => (parseInt(k) - 273.15) * 1.8 + 32;
