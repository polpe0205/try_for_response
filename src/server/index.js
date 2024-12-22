
//const app = express()
//import express from "express"
//import schema from "./schema.js"
//import {createHandler} from "graphql-http/lib/use/express"
//import  {ruruHTML} from "ruru/server"
//import { PrismaClient} from "@prisma/client"
//const { apolloServer, gql } = require("apollo-server");
// import apolloServer from "apollo-server";
//import gql from "apollo-server"; 
const { ApolloServer, gql } = require('apollo-server');



const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello  world!👋',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
