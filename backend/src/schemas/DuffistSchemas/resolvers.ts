import MergeUser from './Users/Application/Mutations/MergeUser';
import Users from './Users/Application/Querys/Users';
import Date from './_definitions/Scalars/Date';

export const resolvers = {
  Query: {
    Users,
  },
  Mutation: {
    MergeUser,
  },
  Date,
};
