const express = require('express');
const router = express.Router();

const seasonsController = require('../controllers/seasons');

router.get('/', seasonsController.index);
router.get('/seed', seasonsController.seedSeasons);

module.exports = router;
