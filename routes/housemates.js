const express = require('express');
const router = express.Router();

const housematesController = require('../controllers/housemates');

router.get('/', housematesController.getAllHousemates);
router.get('/:season', housematesController.getHousematesBySeason);

module.exports = router;
