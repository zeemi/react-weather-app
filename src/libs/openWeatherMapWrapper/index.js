import config from '../../config';

const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

console.log('config', config);

const cityInfoCache = {};

export const fetchCityInfo = (id) => {
  if (cityInfoCache[id]){
    return Promise.resolve(cityInfoCache[id])
  }
  return fetch(`${WEATHER_URL}?id=${id}&mode=json&units=metric&appid=${config.openWeatherMapKey}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      cityInfoCache[id] = myJson;
      return cityInfoCache[id];
    });
};