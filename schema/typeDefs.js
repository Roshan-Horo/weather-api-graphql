const { gql } = require('apollo-server')

const citySchema = `
type City{
  coord: Coord!
  weather: Weather!
  base: String!
  main: Main!
  visibility: Int!
  wind: Wind!
  clouds: Clouds!
  dt: Int!
  sys: Sys!
  timezone: Int!
  id: ID!
  name: String!
  cod: Int!
 }

 type Coord{
  lon: Float!
  lat: Float!
 }

 type Weather {
  id: ID!
  main: String!
  description: String!
  icon: String!
 }

 type Main {
  temp: Float!
  feels_like: Float!
  temp_min: Float!
  temp_max: Float!
  pressure: Float!
  humidity: Float!
 }

 type Wind {
   speed: Float!
   deg: Int!
 }

 type Clouds {
  all: Int!
 }

 type Sys {
  type: Int!
  id: ID!
  country: String!
  sunrise: Int!
  sunset: Int!
 }
`
const weatherSchema = `
   type CityWeather {
    lat: Float!
    lon: Float!
    timezone: String!
    timezone_offset: Int!
    current: Current!
    hourly: [Hourly]
    daily: [Daily]
    alerts: [Alerts]
   }

   type Current {
      dt: Int!
      sunrise: Int!
      sunset: Int!
      temp: Float!
      feels_like: Float!
      pressure: Int!
      humidity: Int!
      dew_point: Float!
      uvi: Float!
      clouds: Int!
      visibility: Int!
      wind_speed: Float!
      wind_deg: Int!
      weather: [Weather]
   }

   type Hourly {
    dt: Int!
    temp: Float!
    feels_like: Float!
    pressure: Int!
    humidity: Int!
    dew_point: Float!
    uvi: Float!
    clouds: Int!
    visibility: Int!
    wind_speed: Float!
    wind_deg: Int!
    wind_gust: Float!
    weather: [Weather]
    pop: Int!
   }

   type Daily {
    dt: Int!
    sunrise: Int!
    sunset: Int!
    moonrise: Int!
    moonset: Int!
    moon_phase: Float!
    temp: WeatherTempAndFeelsLike!
    feels_like: WeatherTempAndFeelsLike!
    pressure: Int!
    humidity: Int!
    dew_point: Float!
    clouds: Int!
    visibility: Int!
    wind_speed: Float!
    wind_deg: Int!
    wind_gust: Float!
    weather: [Weather]
    pop: Int!
    uvi: Float!
   }

   type WeatherTempAndFeelsLike {
    day: Float!
    night: Float!
    eve: Float!
    morn: Float!
   }

  type Alerts{
    sender_name: String!
    event: String
    start: Int!
    end: Int!
    description: String!
    tags: [String]
  }
`

const typeDefs = gql(`
   type Query{
    city(cityName: String!): City!
    cityWeather(lat: Float!, lon: Float!): CityWeather!
   }
   
   ${citySchema}

   ${weatherSchema}
`)

module.exports = { typeDefs }