const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');
const getData = require('../data/parseData');

class Effects {
  constructor(data) {}
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await dbQueries.getAllEffects(db);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getEffectsBySeason(season) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await dbQueries.getSeasonEffects(db, season);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  static seedEffects() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await getData.getEffectsData();
        // console.log(data);
        const result = dbQueries.dbSeedEffects(db, data);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }
}

module.exports = Effects;
