import { ApolloServer, gql } from 'apollo-server-express'
import express, { Request, Response } from "express";
import http from 'http'
import typeDefs from './schema'
import resolvers from './resolvers'

async function startServer () {
  const app = express()
  const httpServer = http.createServer(app)
  const apolloServer = new ApolloServer({ typeDefs, resolvers })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
  
  await new Promise<void>(resolve => httpServer.listen({
    port: 4000
  }, resolve))
}
