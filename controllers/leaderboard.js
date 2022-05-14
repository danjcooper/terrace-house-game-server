const Leaderboard = require('../models/leaderboard');

const getLeaderboard = async (req, res) => {
    try {
        const result = await Leaderboard.all;
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getLeaderboardWithPagination = async (req, res) => {
    try {
        const result = await Leaderboard.topLeaderboardWithOffset(req.params.limit, req.params.offset);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addToLeaderboard = async (req, res) => {
    try {
        const result = await Leaderboard.add(req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getLeaderboard, addToLeaderboard, getLeaderboardWithPagination };
