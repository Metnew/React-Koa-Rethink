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

import {
    OfferQueries,
    OfferMutations,
    OfferType
} from './Offer/OfferQL.js';


let RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => (Object.assign({}, UserQueries, OfferQueries))
});


let RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => (Object.assign({}, UserMutations, OfferMutations))
});


let Schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

export default Schema;
