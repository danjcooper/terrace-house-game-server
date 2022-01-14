const { join: joinPath } = require('path');
const { QueryFile } = require('pg-promise')();

function sql(file) {
  const fullPath = joinPath(__dirname, file); // generating full path;
  return new QueryFile(fullPath, { minify: true });
}

const dbInit = async (db) => {
  try {
    await db.none(sql('dbInit.SQL'));
  } catch (error) {
    console.log(error);
  }
};

const dbSeedSeasons = async (db, data) => {
  db.tx((t) => {
    const queries = data.map((l) => {
      return t.none(
        'INSERT INTO seasons(seasonName, lengthOfSeason, housemateCount, dateCount, coupleCount) VALUES(${name}, ${lengthOfSeason}, ${housemateCount}, ${dateCount}, ${coupleCount})',
        l
      );
    });
    return t.batch(queries);
  })
    .then((data) => {
      console.log('Data was successfully added to the database.');
    })
    .catch((error) => {
      console.log(error);
    });
};

const dbSeedHousemates = (db, data) => {
  console.log(data);
  db.tx((t) => {
    const queries = data.map((l) => {
      return t.none(
        'INSERT INTO housemates(housemateName, nickname, seasonId, weeksInHouse, livedWith, dates, instagramFollowers, ageNow, ageWhenEntered, housemateTagline, imageURL) VALUES(${housemateName}, ${nickname}, (SELECT seasonId from seasons WHERE seasonName=${season}) , ${weeksInHouse}, ${livedWith}, ${dates}, ${instagramFollowers}, ${ageNow}, ${ageWhenEntered}, ${housemateTagline}, ${imageURL})',
        l
      );
    });
    return t.batch(queries);
  })
    .then((data) => {
      console.log('Data was successfully added to the database.');
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAllHousemates = async (db) => {
  const result = await db.any(`SELECT * FROM housemates`);
  return result;
};

const getAllSeasons = async (db) => {
  const result = await db.any(`SELECT * FROM seasons`);
  return result;
};

const getSeasonHousemates = async (db, season) => {
  //TODO Update to work with an array.
  const result = await db.any(
    `SELECT * FROM housemates INNER JOIN seasons ON housemates.seasonId=seasons.seasonId
  AND seasons.seasonname = $1;`,
    season
  );
  return result;
};

module.exports = {
  dbInit,
  dbSeedSeasons,
  dbSeedHousemates,
  getAllHousemates,
  getAllSeasons,
  getSeasonHousemates,
};
