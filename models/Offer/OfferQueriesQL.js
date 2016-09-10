
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
  offers: {
    type: new GraphQLList(UserType),
    resolve: Offer.getAll
  },
  offer: {
    type: OfferType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Offer.get
  }
};
