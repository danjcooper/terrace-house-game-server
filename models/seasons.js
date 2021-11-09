const db = require('../DB/dbConfig');

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
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.query('SELECT * FROM Housemates;');
        console.log(result);
        resolve(result);
      } catch (error) {
        console.log('error in model');
        reject('error in model');
      }
    });
  }
  static get getBySeason() {
    // TODO get season by name.
  }
  static get getSeasonsFromArray() {
    // TODO get all data for the seasons in a passed array.
  }
  static databaseInit() {
    const text = `
    CREATE TABLE IF NOT EXISTS "seasons" (
	    "id" SERIAL PRIMARY KEY,
	    "name" VARCHAR(100) NOT NULL,
	    "couples" INT NOT NULL
    );`;
    return new Promise(async (resolve, reject) => {
      try {
        //DB INIT
        const result = await db.query(text);
        console.log(result);
        resolve(result);
      } catch (error) {
        console.log('error in model');
        reject('error in model');
      }
    });
  }
  static addHousemate(housemateData) {
    // TODO add a housemate to the database.
  }
}

module.exports = Seasons;
