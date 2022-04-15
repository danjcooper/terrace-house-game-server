const Leaderboard = require('../models/leaderboard');

const getLeaderboard = async (req, res) => {
    try {
        const result = await Leaderboard.all;
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addToLeaderboard = async (req, res) => {
    try {
        const result = await Leaderboard.add({ username: 'dan', score: 3000 });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getLeaderboard, addToLeaderboard };
