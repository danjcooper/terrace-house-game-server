const express = require('express');
const router = express.Router();

const effectsController = require('../controllers/effects');

router.get('/', effectsController.getAllEffects);
router.get('/:season', effectsController.getEffectsBySeason);

module.exports = router;
