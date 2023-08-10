    // // strapi-api/config/database.js
    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       host: env('DATABASE_HOST'),
    //       port: env.int('DATABASE_PORT'),
    //       database: env('DATABASE_NAME'),
    //       user: env('DATABASE_USERNAME'),
    //       password: env('DATABASE_PASSWORD'),
    //       schema: env('DATABASE_SCHEMA'), // Not required
    //       ssl: {
    //         rejectUnauthorized: env.bool('DATABASE_SSL_SELF'), // For self-signed certificates
    //       },
    //     },
    //     debug: false,
    //   },
    // });

    // path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
