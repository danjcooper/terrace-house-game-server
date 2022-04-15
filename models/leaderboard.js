const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');

class Leaderboard {
    constructor(data) {
        this.score = data.score;
        this.username = data.username;
    }

    static create(data) {
        return new Leaderboard(data);
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await dbQueries.getAllLeaderboard(db);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    static add(data) {
        const newEntry = Leaderboard.create(data);

        return new Promise(async (resolve, reject) => {
            try {
                const result = await dbQueries.addToLeaderboard(db, newEntry);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = Leaderboard;
