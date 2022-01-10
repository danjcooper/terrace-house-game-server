const Seasons = require('../models/seasons');
const helpers = require('../helpers');
require('dotenv').config();

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

module.exports = { getAllSeasons, getSeasonHousemates };
