const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');
const getData = require('../data/parseData');

class Housemates {
  constructor(data) {
    this.id = data.housemateid;
    this.name = data.housematename;
    this.nickname = data.nickname;
    this.tagline = data.housematetagline;
    this.totalWeeksInHouse = data.weeksinhouse;
    this.totalLivedWith = data.livedwith;
    this.totalDates = data.dates;
    this.instagramFollowers = data.instagramfollowers;
    this.age = data.agenow;
    this.ageWhenEntered = data.agewhenentered;
    this.imageUrl = data.imageurl;
    this.seasonId = data.seasonid;
    this.seasonName = data.seasonname;
  }

  static create(data) {
    return new Housemates(data);
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await dbQueries.getAllHousemates(db);
        const output = data.map((housemate) => Housemates.create(housemate));
        resolve(output);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getHousematesBySeason(season) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await dbQueries.getHousematesBySeason(db, season);
        const output = result.map((housemate) => Housemates.create(housemate));
        resolve(output);
      } catch (error) {
        reject(error);
      }
    });
  }

  static seedHousemates() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await getData.getHousemateData();
        const result = dbQueries.dbSeedHousemates(db, data);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }
}

module.exports = Housemates;
