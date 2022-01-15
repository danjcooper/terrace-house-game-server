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
    const seasons =
      req.params.season.indexOf('+') === -1
        ? [req.params.season]
        : helpers.parseMultiSeasonString(req.params.season);

    for (let i = 0; i < seasons.length; i++) {
      seasons[i] = helpers.convertSeasonCode(seasons[i]);
    }

    const result = await Housemates.getHousematesBySeason(seasons);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

module.exports = { getAllHousemates, getHousematesBySeason };
