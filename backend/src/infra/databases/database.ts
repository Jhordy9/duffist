import Knex from 'knex';
import * as Path from 'path';

const database = Knex({
  client: 'pg',
  connection: {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: Path.resolve(__dirname, 'migrations'),
  },
  searchPath: ['knex', `${process.env.DB_SCHEMA}`],
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  await database.migrate.latest();
})();

export default database;