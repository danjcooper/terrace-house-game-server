require('dotenv').config();
// const { join: joinPath } = require('path');
const pgp = require('pg-promise')();
// const dbQueries = require('./queries/dbQueries');

let ssl = { rejectUnauthorized: false };

const config = {
  connectionString: process.env.DB_URI,
  max: 30,
  ssl: ssl,
};

// const db = pgp(config);
// console.log(db);

// dbQueries.dbInit();
// dbQueries.dbSeed();

module.exports = pgp(config);
