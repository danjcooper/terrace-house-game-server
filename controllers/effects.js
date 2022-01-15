const Effects = require('../models/effects');
const helpers = require('../helpers');

const index = async (req, res) => {
  try {
    res.status(200).send('Welcome to the effects route');
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

const getAllEffects = async (req, res) => {
  try {
    const data = await Effects.all;
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

const getEffectsBySeason = async (req, res) => {
  try {
    const seasons =
      req.params.season.indexOf('+') === -1
        ? [req.params.season]
        : helpers.parseMultiSeasonString(req.params.season);

    for (let i = 0; i < seasons.length; i++) {
      seasons[i] = helpers.convertSeasonCode(seasons[i]);
    }

    const result = await Effects.getEffectsBySeason(seasons);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

module.exports = { index, getAllEffects, getEffectsBySeason };
