const config = {
  openWeatherMapKey: null
};

const configPath = (process.env.NODE_ENV || 'development') === 'production' ? 'prod.js' : 'development.js';
export default {...config, ...require(`./${configPath}`).default}