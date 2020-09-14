import { ApolloError } from 'apollo-server-express';
import { IContextDTO } from 'types';

const authorization = (
  ctx: IContextDTO,
  schemaName: string,
  type: string,
): boolean | ApolloError => {
  if (!ctx.core.allows(type)) {
    throw new ApolloError(
      `You are not allowed to access the ${schemaName}`,
      'not_authorized',
    );
  }

  return true;
};

export default authorization;
