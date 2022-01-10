const express = require('express');
const router = express.Router();

const databaseController = require('../controllers/database');

router.get('/', databaseController.index);
router.get('/buildDatabase', databaseController.buildDatabase);

module.exports = router;
