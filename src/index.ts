import { ApolloServer, gql } from 'apollo-server'
import express, { Request, Response } from "express";
import typeDefs from './schema' 
import resolvers from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers }) 

// TODO: clean up packages

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
