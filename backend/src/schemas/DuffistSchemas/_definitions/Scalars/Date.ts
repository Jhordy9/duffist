import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value): Date | undefined {
    return new Date(value);
  },
  serialize(value): any | undefined {
    return value;
  },
  parseLiteral(ast): number | string | null {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    return null;
  },
});
