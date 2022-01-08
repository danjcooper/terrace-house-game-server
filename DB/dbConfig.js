require('dotenv').config();
const pgp = require('pg-promise')();

let ssl = { rejectUnauthorized: false };

const config = {
  connectionString: process.env.DATABASE_URL,
  max: 30,
  ssl: ssl,
};

module.exports = pgp(config);
