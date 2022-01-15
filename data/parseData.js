const csv = require('csv-parser');
const fs = require('fs');
var path = require('path');

const getSeasonData = () => {
  const results = [];
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
  const results = [];
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

const getEffectsData = () => {
  const results = [];
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(path.resolve(__dirname, 'EFFECTS.csv'))
        .pipe(csv())
        .on('data', (data) => {
          // Update strings to ints for database schema.
          for (const key in data) {
            if (data[key] == parseInt(data[key])) {
              // the value is a int.
              data[key] = parseInt(data[key]);
            } else if (data[key] === 'TRUE') {
              data[key] = true;
            } else if (data[key] === 'FALSE') {
              data[key] = false;
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

module.exports = { getSeasonData, getHousemateData, getEffectsData };
