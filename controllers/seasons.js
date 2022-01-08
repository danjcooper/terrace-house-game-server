const Seasons = require('../models/seasons');
const helpers = require('../helpers');

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

const getAllSeasons = async (req, res) => {
  try {
    const result = await Seasons.all;
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('oops');
  }
};

const getSeasonHousemates = async (req, res) => {
  try {
    const season = helpers.convertSeasonCode(req.params.season);
    const result = await Seasons.getSeasonHousemates(season);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

module.exports = { index, seedSeasons, getAllSeasons, getSeasonHousemates };
