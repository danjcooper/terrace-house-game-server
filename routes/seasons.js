const express = require('express');
const router = express.Router();

const seasonsController = require('../controllers/seasons');

router.get('/', seasonsController.index);
router.get('/seed', seasonsController.seedSeasons);
router.get('/all', seasonsController.getAllSeasons);
router.get('/:season', seasonsController.getSeasonHousemates);

module.exports = router;
