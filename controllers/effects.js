const Housemates = require('../models/effects');
const helpers = require('../helpers');

const getAllEffects = async (req, res) => {
  try {
    const data = await Housemates.all;
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

module.exports = { getAllEffects };
