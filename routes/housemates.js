const express = require('express');
const router = express.Router();

const housematesController = require('../controllers/housemates');

router.get('/', housematesController.getAllHousemates);

module.exports = router;
