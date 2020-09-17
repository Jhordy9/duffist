import * as Path from 'path';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
      password: 'jhordy',
      database: process.env.DB_DATABASE,
      user: 'postgres',
    },
    migrations: {
      directory: Path.resolve(__dirname, 'src', 'infra', 'migrations'),
    },
    seeds: {
      directory: Path.resolve(__dirname, 'src', 'seed'),
    },
  },
};
