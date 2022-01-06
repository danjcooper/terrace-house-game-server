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
  try {
    await db.none(
      'INSERT INTO seasons(seasonName, lengthOfSeason, housemateCount, dateCount, coupleCount) VALUES($1, $2, $3, $4, $5)',
      [
        data[0].name,
        data[0].lengthOfSeason,
        data[0].housemateCount,
        data[0].dateCount,
        data[0].coupleCount,
      ]
    );
    console.log('test');
  } catch (error) {
    console.log(error);
  }
};

//   try {
//     data.forEach(async (item) => {
//       await db.none(
//         'INSERT INTO seasons(seasonName, lengthOfSeason, housemateCount, dateCount, coupleCount) VALUES(${item.name},${item.lengthOfSeason}, ${item.housemateCount}, ${item.dateCount}, ${item.coupleCount})',
//         item
//       );
//     });
//   } catch (error) {
//     console.log('this was bad');
//   }

// const dbSeedHousemates = async (db, data) => {
//   try {
//     await db.none(sql('dbSeed.SQL'));
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { dbInit, dbSeedSeasons };
