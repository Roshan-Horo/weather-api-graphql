const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.openweathermap.org';
  }

  async getCityDetails(cityName) {

    return this.get(`/data/2.5/weather`, {
      q: cityName,
      units: 'metric',
      appid: '891d4796401bf294076309e0a682430b'
    });
  }

  async getCityWeatherDetails({ lat, lon }) {

    return this.get(`/data/2.5/onecall`, {
      lat: lat,
      lon: lon,
      exclude: 'minutely',
      units: 'metric',
      appid: '891d4796401bf294076309e0a682430b'
    });
  }

}

module.exports = WeatherApi