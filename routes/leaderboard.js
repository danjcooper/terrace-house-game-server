const express = require('express');
const router = express.Router();

const leaderboardController = require('../controllers/leaderboard');

router.get('/all/:limit/:offset', leaderboardController.getLeaderboardWithPagination);
router.post('/new', leaderboardController.addToLeaderboard);

module.exports = router;
