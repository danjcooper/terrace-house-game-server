const Housemates = require('../models/housemates');

const seedHousemates = async (req, res) => {
  try {
    await Housemates.seedHousemates();
    res.status(200).send('seasons seeded');
  } catch (error) {
    res.status(500).send('oops');
  }
};

const getAllHousemates = async (req, res) => {
  try {
    const data = await Housemates.all;
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('oops');
  }
};

module.exports = { seedHousemates, getAllHousemates };
