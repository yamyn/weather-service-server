const fetch = require("node-fetch");
const { openWeatherApiKey, openWeatherUrl } = require("../config/config");

const getWeather = async (id) => {
  const requestParams = `?id=${id}`;
  const request = await fetch(`${openWeatherUrl}?id=${id}&APPID=${openWeatherApiKey}`).then(res => res.json());

  return request;
};

module.exports = getWeather;
