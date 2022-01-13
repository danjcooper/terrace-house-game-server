const Housemates = require('../models/housemates');
const helpers = require('../helpers');

const getAllHousemates = async (req, res) => {
  try {
    const data = await Housemates.all;
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

const getHousematesBySeason = async (req, res) => {
  try {
    const season = helpers.convertSeasonCode(req.params.season);
    console.log(season);
    const result = await Housemates.getHousematesBySeason(season);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

module.exports = { getAllHousemates, getHousematesBySeason };
