import 'reflect-metadata';
import 'express-async-errors';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';

import { IUserDTO, IProfileDTO, IContextDTO } from 'types';
import { GraphQLFormattedError } from 'graphql';
import database from '../../infra/databases/database';
import { checkToken, tokenVerifier, authorization, validator } from './core';

export default () => {
  const server = new ApolloServer({
    context: async ({ req, connection }): Promise<IContextDTO> => {
      const token = checkToken(req, connection);
      const user = await tokenVerifier(req, token);

      const allows = (type: string): IUserDTO | IProfileDTO | undefined => {
        const hasAuth = user?.profiles.find(
          profile => profile.userID === user.id && profile.type === type,
        );
        return user && hasAuth;
      };

      return { database, core: { authorization, validator, allows } };
    },
    formatError: (response: GraphQLFormattedError): GraphQLFormattedError => {
      return response;
    },
  });

  const app = Express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => console.log('Server initiate!'));
};
