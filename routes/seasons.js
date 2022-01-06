const express = require('express');
const router = express.Router();

const seasonsController = require('../controllers/seasons');

router.get('/', seasonsController.index);

module.exports = router;
