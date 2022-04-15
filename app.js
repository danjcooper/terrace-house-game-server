const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Konbanwa. Welcome to the Terrace House API');
});

const seasonsRoutes = require('./routes/seasons');
app.use('/seasons', seasonsRoutes);

const housematesRoutes = require('./routes/housemates');
app.use('/housemates', housematesRoutes);

const effectsRoutes = require('./routes/effects');
app.use('/effects', effectsRoutes);

const leaderboardRoutes = require('./routes/leaderboard');
app.use('/leaderboard', leaderboardRoutes);

const databaseRoutes = require('./routes/database');
process.env.ENVIRONMENT === 'DEV' ? app.use('/db', databaseRoutes) : null;

app.get('*', function (req, res) {
    res.status(404).send('Not Found.');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
