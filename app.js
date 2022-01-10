const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Terrace House API');
});

const seasonsRoutes = require('./routes/seasons');
app.use('/seasons', seasonsRoutes);

const housematesRoutes = require('./routes/housemates');
app.use('/housemates', housematesRoutes);

const databaseRoutes = require('./routes/database');
process.env.ENVIRONMENT === 'DEV' ? app.use('/db', databaseRoutes) : null;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
