import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './DuffistSchemas/resolvers';
import { typeDefs } from './DuffistSchemas/typeDefs';
import { schemaDirectives } from './DuffistSchemas/_definitions/Directives';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives,
});
