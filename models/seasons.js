const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');

class Seasons {
  constructor(data) {
    this.name = data.name;
    this.nickname = data.nickname;
    this.season = data.season;
    this.tagline = data.tagline;
    this.weeksInTheHouse = data.weeksInTheHouse;
    this.dates = data.dates;
    this.livedWith = data.livedWith;
    this.instagramFollowers = data.instagramFollowers;
    this.ageNow = data.ageNow;
    this.ageWhenEntered = data.ageWhenEntered;
    this.imageURL = data.imageURL;
  }

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
}

module.exports = Seasons;
