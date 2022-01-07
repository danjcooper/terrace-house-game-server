const { rejects } = require('assert');
const csv = require('csv-parser');
const fs = require('fs');
var path = require('path');
const results = [];

const getSeasonData = () => {
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(path.resolve(__dirname, 'SEASONS.csv'))
        .pipe(csv())
        .on('data', (data) => {
          // Update strings to ints for database schema.
          for (const key in data) {
            if (data[key] == parseInt(data[key])) {
              data[key] = parseInt(data[key]);
            }
          }

          results.push(data);
        })
        .on('end', () => {
          resolve(results);
        });
    } catch (error) {
      reject('error');
    }
  });
};

const getHousemateData = () => {
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(path.resolve(__dirname, 'Housemates.csv'))
        .pipe(csv())
        .on('data', (data) => {
          // Update strings to ints for database schema.
          for (const key in data) {
            if (data[key] == parseInt(data[key])) {
              data[key] = parseInt(data[key]);
            }
          }

          results.push(data);
        })
        .on('end', () => {
          resolve(results);
        });
    } catch (error) {
      reject('error');
    }
  });
};

module.exports = { getSeasonData, getHousemateData };
