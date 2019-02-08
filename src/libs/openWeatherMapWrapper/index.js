import config from '../../config';

const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInfoCache = {};


const fetchAndCache = (cityId, url, cacheKey) => {
  if (cityInfoCache[cityId] && cityInfoCache[cityId][cacheKey]){
    return Promise.resolve()
  }

  return fetch(`${url}?id=${cityId}&mode=json&units=metric&appid=${config.openWeatherMapKey}`)
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      cityInfoCache[cityId] = {...cityInfoCache[cityId], ...{[cacheKey]: jsonData}}
    })
};

export const fetchCityInfo = (cityId) => {
  return Promise
    .all([fetchAndCache(cityId, WEATHER_URL, 'weather'), fetchAndCache(cityId, FORECAST_URL, 'forecast')])
    .then(() => {
      return cityInfoCache[cityId]
    });
};