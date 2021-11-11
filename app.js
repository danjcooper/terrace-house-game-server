const express = require('express');
const app = express();
const cors = require('cors');
const Seasons = require('./models/seasons');

app.use(cors());

const port = 3000;

const seasons = ['B&GND', 'CD', 'B&GITC', 'AS', 'OND', 'T1920'];

app.get('/:season', async (req, res) => {
  const data = {
    name: 'Tokyo 2019 / 2020',
    no_of_housemates: 21,
    length: 40,
    dates: 14,
    couples: 5,
  };
  try {
    const seasons = await Seasons.addSeason(data);
    console.log(seasons);
  } catch (error) {
    console.log('error');
  }

  if (!seasons.includes(req.params.season)) {
    res.status(404).send('Season not found');
  } else {
    res.status(200).send('My fav season is ' + req.params.season);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
