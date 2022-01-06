const Seasons = require('../models/seasons');

const index = async (req, res) => {
  try {
    await Seasons.initDatabase();
    res.status(200).send('init');
  } catch (error) {
    res.status(500).send('oops');
  }
};

const seedSeasons = async (req, res) => {
  try {
    await Seasons.seedSeasons();
    res.status(200).send('seasons seeded');
  } catch (error) {
    res.status(500).send('oops');
  }
};

module.exports = { index, seedSeasons };
