const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');

class Leaderboard {
    constructor(data) {
        this.id = data.id;
        this.position = data.position;
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
                const results = result.map((result, i) => {
                    result.position = i + 1;
                    return Leaderboard.create(result);
                });
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    }

    static add(data) {
        const newEntry = Leaderboard.create(data);

        return new Promise(async (resolve, reject) => {
            try {
                // Add the entry to the database.
                const response = await dbQueries.addToLeaderboard(db, newEntry);

                // Get the index of the entry that was added.
                const allResults = await Leaderboard.all;

                let targetIndex;

                for (let i = 0; i < allResults.length; i++) {
                    if (allResults[i].id === response.id) {
                        targetIndex = i;
                        break;
                    }
                }
                if (!targetIndex) throw new Error('Score index was not found.');

                // Return the entries that are 5 above and 5 below the users score.
                const targetStart = targetIndex - 5;
                const targetEnd = targetIndex + 6;

                const final = allResults.slice(targetStart, targetEnd);
                resolve(final);
            } catch (error) {
                reject(error);
            }
        });
    }

    static get topOneHundred() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await dbQueries.getTopOneHundred(db);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = Leaderboard;
