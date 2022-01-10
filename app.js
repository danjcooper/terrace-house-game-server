const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 3000;

const seasonsRoutes = require('./routes/seasons');
app.use('/seasons', seasonsRoutes);

const housematesRoutes = require('./routes/housemates');
app.use('/housemates', housematesRoutes);

const databaseRoutes = require('./routes/database');
app.use('/db', databaseRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
