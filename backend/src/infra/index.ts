import Knex from 'knex';
import * as Path from 'path';

const database = Knex({
  client: 'pg',
  connection: {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    password: 'jhordy',
    database: 'duffist',
    user: 'postgres',
  },
  migrations: {
    directory: Path.resolve(__dirname, 'migrations'),
    extension: 'ts',
  },
  seeds: {
    directory: Path.resolve(__dirname, 'src', 'seed'),
  },
  searchPath: ['knex', 'public'],
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  await database.migrate.latest();
})();

export default database;
