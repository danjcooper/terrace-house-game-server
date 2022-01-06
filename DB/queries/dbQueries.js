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

module.exports = { dbInit };
