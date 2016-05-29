
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import UserType from './UserTypeQL.js';
import User from './UserSchema.js';

export default {
  users: {
    type: new GraphQLList(UserType),
    resolve: User.getListOfUsers
  },
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: User.getUserByPosition
  }
};
