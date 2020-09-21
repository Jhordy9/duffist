import CreateUser from './Users/Application/Mutations/CreateUser';
import Users from './Users/Application/Querys/Users';
import Date from './_definitions/Scalars/Date';

export const resolvers = {
  Query: {
    Users,
  },
  Mutation: {
    CreateUser,
  },
  Date,
};
