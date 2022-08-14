const resolvers = {
  Query: {
    city: async (_, args, { dataSources }) => {
      return await dataSources.weatherApi.getCityDetails(args.cityName)
    },
    cityWeather: async (_, args, { dataSources }) => {
      return await dataSources.weatherApi.getCityWeatherDetails(args)
    }
  }
}

module.exports = { resolvers }