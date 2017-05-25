import {OPEN_WEATHER_API_KEY, } from '../fakeEnv';

export const OpenWeatherURL = (city, country = 'us', key = OPEN_WEATHER_API_KEY) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${key}`;
