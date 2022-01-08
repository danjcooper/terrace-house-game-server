require('dotenv').config();
const pgp = require('pg-promise')();

let ssl = { rejectUnauthorized: false };

const config = {
  connectionString: process.env.DB_URI,
  max: 30,
  ssl: ssl,
};

module.exports = pgp(config);
