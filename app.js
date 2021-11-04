const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = 3000;

const seasons = ['B&GND', 'CD', 'B&GITC', 'AS', 'OND', 'T1920'];

app.get('/:season', (req, res) => {
  if (!seasons.includes(req.params.season)) {
    res.status(404).send('Season not found');
  } else {
    res.status(200).send('My fav season is ' + req.params.season);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
