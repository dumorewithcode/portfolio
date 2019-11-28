import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import icons from '../client/src/client/components/Index/TechStackIcons';
//import db from '../redis/db/db';
import {makeExecutableSchema} from 'graphql-tools';


import typeDefs from './schema';
import resolvers from './resolvers'


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: async ()=> ({
    db: await icons
  })

});


server.listen({ port:8080 }),() => {
  console.log(`🚀  Server ready at localhost:${port}`);
};
 