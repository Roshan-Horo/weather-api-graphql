const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/typeDefs.js')
const { resolvers } = require('./schema/resolvers.js')
const WeatherApi = require('./schema/weather-api.js')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      weatherApi: new WeatherApi()
    }
  }
});

server.listen().then(({ url }) => console.log(`server listening on ${url}`))