import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import User from './UserSchema.js';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    surname:{
      type: GraphQLString
    },
    age:{
      type: GraphQLInt
    }
    // friends:{
    //   type: new GraphQLList()
    // }
  })
});
