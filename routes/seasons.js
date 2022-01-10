const express = require('express');
const router = express.Router();

const seasonsController = require('../controllers/seasons');

router.get('/', seasonsController.getAllSeasons);
router.get('/:season', seasonsController.getSeasonHousemates);

module.exports = router;
