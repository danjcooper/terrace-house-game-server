const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');

class Seasons {
  constructor(data) {}

  static get all() {
    // TODO Return all seasons.
  }

  static initDatabase() {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('hry');
        const result = dbQueries.dbInit(db);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }
  static seedSeasons() {
    return new Promise(async (resolve, reject) => {
      try {
        const testData = [
          {
            name: 'test',
            lengthOfSeason: 10,
            housemateCount: 10,
            dateCount: 10,
            coupleCount: 10,
          },
        ];
        const result = dbQueries.dbSeedSeasons(db, testData);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }
}

module.exports = Seasons;
