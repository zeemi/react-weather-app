import config from '../../config';

const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInfoCache = {};


const fetchWeather = (id) => {
  if (cityInfoCache[id] && cityInfoCache[id].weather) {
    return Promise.resolve()
  }

  return fetch(`${WEATHER_URL}?id=${id}&mode=json&units=metric&appid=${config.openWeatherMapKey}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      cityInfoCache[id] = {...cityInfoCache[id], ...{weather: myJson}};
    });
};

const fetchForecast = (id) => {
  if (cityInfoCache[id] && cityInfoCache[id].forecast) {
    return Promise.resolve()
  }

  return fetch(`${FORECAST_URL}?id=${id}&mode=json&units=metric&appid=${config.openWeatherMapKey}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      cityInfoCache[id] = {...cityInfoCache[id], ...{forecast: myJson}};
    });
};

export const fetchCityInfo = (id) => {
  return Promise.all([fetchForecast(id), fetchWeather(id)]).then(() => {
    return cityInfoCache[id]
  });
};