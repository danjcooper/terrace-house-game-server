const Seasons = require('../models/seasons');

const index = async (req, res) => {
  try {
    console.log('hey');
    const init = await Seasons.initDatabase();
    console.log(init);
    res.status(200).send('init');
  } catch (error) {
    res.status(500).send('oops');
  }
};

module.exports = { index };
