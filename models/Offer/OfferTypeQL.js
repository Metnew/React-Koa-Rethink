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
    name: 'Offer',
    description: 'An Offer',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        description: {
            type: GraphQLString
        },
        type: {
            type: GraphQLInt
        },
        photo: {
            type: GraphQLString
        },
        owner_id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    })
});
