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
  addUser:{
    type: UserType,
    args: {
      name:{
        name:'name',
        type:new GraphQLNonNull(GraphQLString)
      },
    },
    resolve: (root, {name, surname, age}, context) => {
        console.log(name, surname, age, context)
      var newUser = {name:name, surname:surname, age:age};
      return User;
    }
  }
};
