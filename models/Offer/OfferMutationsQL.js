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
    addOffer: {
        type: OfferType,
        args: {
            name: {
                name: 'name',
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                name: 'description',
                type: new GraphQLNonNull(GraphQLString)
            },
            price: {
                name: 'price',
                type: GraphQLInt
            }
        },
        resolve: (root, {
            name,
            surname,
            age
        }, context) => {
            console.log(name, surname, age, context)
            var newUser = {
                name: name,
                surname: surname,
                age: age
            };
            return User;
        }
    },
    updateOffer: {
        type: OfferType,
        args: {
            name: {
                name: 'name',
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                name: 'description',
                type: new GraphQLNonNull(GraphQLString)
            },
            price: {
                name: 'price',
                type: GraphQLInt
            }
        },
        resolve: (root, {
            name,
            surname,
            age
        }, context) => {
            console.log(name, surname, age, context)
            var newUser = {
                name: name,
                surname: surname,
                age: age
            };
            return User;
        }
    },
    deleteOffer: {
        type: OfferType,
        args: {
            name: {
                name: 'name',
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                name: 'description',
                type: new GraphQLNonNull(GraphQLString)
            },
            price: {
                name: 'price',
                type: GraphQLInt
            }
        },
        resolve: (root, {
            name,
            surname,
            age
        }, context) => {
            console.log(name, surname, age, context)
            var newUser = {
                name: name,
                surname: surname,
                age: age
            };
            return User;
        }
    }
};
