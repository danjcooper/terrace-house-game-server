const db = require('../DB/dbConfig');
const getData = require('../data/parseData');

const seedDatabase = async () => {
    const seasonData = await getData.getSeasonData();

    console.log('Seeding...');
    db.task(t => {
        const queries = seasonData.map(l => {
            return t.none(
                'INSERT INTO seasons(seasonName, lengthOfSeason, housemateCount, dateCount, coupleCount, seasonCode) VALUES(${name}, ${lengthOfSeason}, ${housemateCount}, ${dateCount}, ${coupleCount}, ${seasonCode})',
                l
            );
        });
        return t.batch(queries);
    })
        .then(async data => {
            console.log('Seasons were successfully added to the database.');

            const housemateData = await getData.getHousemateData();
            db.tx(t => {
                const queries = housemateData.map(l => {
                    return t.none(
                        'INSERT INTO housemates(housemateName, nickname, seasonId, weeksInHouse, livedWith, dates, instagramFollowers, ageNow, ageWhenEntered, housemateTagline, imageURL) VALUES(${housemateName}, ${nickname}, (SELECT seasonId from seasons WHERE seasonName=${season}) , ${weeksInHouse}, ${livedWith}, ${dates}, ${instagramFollowers}, ${ageNow}, ${ageWhenEntered}, ${housemateTagline}, ${imageURL})',
                        l
                    );
                });
                return t.batch(queries);
            })
                .then(data => {
                    console.log('Housemates were successfully added to the database.');
                })
                .catch(error => {
                    console.log(error);
                });
        })
        .catch(error => {
            console.log(error);
        });

    try {
    } catch (error) {
        console.log('There was an error seeding the database.');
    }
};

seedDatabase();
