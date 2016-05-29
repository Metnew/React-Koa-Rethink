// schema.js
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import {
  UserQueries,
  UserMutations,
  UserType
  } from './User/UserQL.js';

let RootQuery = new GraphQLObjectType({
  name: 'Query',  
  fields: () => ({
    user: UserQueries.user,
    users: UserQueries.users
  })
});


let RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addUser: UserMutations.addUser
  })
});


let Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default Schema;
