import 'reflect-metadata';
import 'express-async-errors';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import database from '../../infra/databases/database';

export default () => {
  const server = new ApolloServer({
    context: ({ req, connection }) => {
      return { database };
    },
  });

  const app = Express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => console.log('Initial console'));
};
