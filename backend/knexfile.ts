import * as Path from 'path';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: Path.resolve(__dirname, 'src', 'infra', 'migrations'),
    },
  },
};
