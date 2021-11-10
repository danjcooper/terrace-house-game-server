const knex = require('../DB/dbConfig');

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
    return new Promise((resolve, reject) => {
      knex('seasons')
        .insert({ name: 'Slaughterhouse Five', couples: 5 })
        .then((rows) => {
          console.log(rows);
          resolve(rows);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });

      // const test = knex.select().from('seasons');
      // const result = await db.query('SELECT * FROM Housemates;');
    });
  }
  static get getBySeason() {
    // TODO get season by name.
  }
  static get getSeasonsFromArray() {
    // TODO get all data for the seasons in a passed array.
  }
  static databaseInit() {
    return new Promise((resolve, reject) => {
      // knex.schema
      //   .dropTableIfExists('housematesFTest')
      //   .then((res) => resolve(res))
      //   .catch((err) => reject(err));
      knex.schema
        .createTable('housematesnewestestst', (table) => {
          table.increments();
          table.string('name');
          table.timestamps();
          table.integer('dates');
          table.integer('seasons');
          table.foreign('seasons').references('seasons.seasonId');
        })
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  static addHousemate(housemateData) {
    // TODO add a housemate to the database.
  }
}

module.exports = Seasons;
