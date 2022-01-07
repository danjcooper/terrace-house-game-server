const express = require('express');
const router = express.Router();

const housematesController = require('../controllers/housemates');

// router.get('/', seasonsController.index);
router.get('/seed', housematesController.seedHousemates);

module.exports = router;
