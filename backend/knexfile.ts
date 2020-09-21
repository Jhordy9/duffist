import * as Path from 'path';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
      password: 'jhordy',
      database: 'duffist',
      user: 'postgres',
    },
    migrations: {
      directory: Path.resolve(__dirname, 'src', 'infra', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: Path.resolve(__dirname, 'src', 'seed'),
    },
    searchPath: ['knex', 'public'],
  },
};
