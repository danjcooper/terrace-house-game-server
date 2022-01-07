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

module.exports = { dbInit, dbSeedSeasons };
