import { directives } from './_definitions/Directives';
import {
  UserDomain,
  UserMutations,
  UserInputs,
  UserQuerys,
} from './Users/Domain/User';

export const typeDefs = `
  ${directives}

  scalar Date
  ${UserDomain}

  type Query {
    ${UserQuerys}
  }

  type Mutation {
    ${UserMutations}
  }

  ${UserInputs}
`;
