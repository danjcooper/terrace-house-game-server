require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  version: '13.4',
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: { rejectUnauthorized: false },
  },
});

// const knex = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
// });

module.exports = knex;
