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

module.exports = { getAllSeasons };
