import 'reflect-metadata';
import 'express-async-errors';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { GraphQLFormattedError } from 'graphql';

import { v4 as uuidv4 } from 'uuid';

import { IContextDTO } from 'types';
import { schema } from 'schemas';
import database from '../../infra/databases/database';
import {
  checkToken,
  tokenVerifier,
  validator,
  comparePassword,
  hashPassword,
} from './core';

export default () => {
  const server = new ApolloServer({
    schema,
    context: async ({ req, connection }): Promise<IContextDTO> => {
      const token = checkToken(req, connection);
      const user = await tokenVerifier(req, token);

      return {
        user,
        database,
        core: {
          validator,
          comparePassword,
          hashPassword,
        },
        libs: {
          uuidv4,
        },
      };
    },
    formatError: (response: GraphQLFormattedError): GraphQLFormattedError => {
      return response;
    },
  });

  const app = Express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => console.log('Server initiate!'));
};
