const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');
const getData = require('../data/parseData');

class Seasons {
  constructor(data) {}

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = dbQueries.getAllSeasons(db);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  static initDatabase() {
    return new Promise(async (resolve, reject) => {
      try {
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
        const testData = await getData.getSeasonData();
        const result = dbQueries.dbSeedSeasons(db, testData);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }
}

module.exports = Seasons;
