const { join: joinPath } = require('path');
const { QueryFile } = require('pg-promise')();

function sql(file) {
    const fullPath = joinPath(__dirname, file); // generating full path;
    return new QueryFile(fullPath, { minify: true });
}

const dbInit = async db => {
    try {
        await db.none(sql('dbInit.SQL'));
    } catch (error) {
        console.log(error);
    }
};

const dbSeedSeasons = async (db, data) => {
    console.log(data);
    db.tx(t => {
        const queries = data.map(l => {
            return t.none(
                'INSERT INTO seasons(seasonName, lengthOfSeason, housemateCount, dateCount, coupleCount, seasonCode) VALUES(${name}, ${lengthOfSeason}, ${housemateCount}, ${dateCount}, ${coupleCount}, ${seasonCode})',
                l
            );
        });
        return t.batch(queries);
    })
        .then(data => {
            console.log('Data was successfully added to the database.');
        })
        .catch(error => {
            console.log(error);
        });
};

const dbSeedHousemates = (db, data) => {
    // console.log(data);
    db.tx(t => {
        const queries = data.map(l => {
            return t.none(
                'INSERT INTO housemates(housemateName, nickname, seasonId, weeksInHouse, livedWith, dates, instagramFollowers, ageNow, ageWhenEntered, housemateTagline, imageURL) VALUES(${housemateName}, ${nickname}, (SELECT seasonId from seasons WHERE seasonName=${season}) , ${weeksInHouse}, ${livedWith}, ${dates}, ${instagramFollowers}, ${ageNow}, ${ageWhenEntered}, ${housemateTagline}, ${imageURL})',
                l
            );
        });
        return t.batch(queries);
    })
        .then(data => {
            console.log('Data was successfully added to the database.');
        })
        .catch(error => {
            console.log(error);
        });
};

const dbSeedEffects = (db, data) => {
    // console.log(data);
    db.tx(t => {
        const queries = data.map(l => {
            return t.none(
                'INSERT INTO effects(housemate, seasonId, positive, special, description, imageURL) VALUES(${housemate}, (SELECT seasonId from seasons WHERE seasonName=${season}) , ${positive}, ${special}, ${description}, ${imageURL});',
                l
            );
        });
        return t.batch(queries);
    })
        .then(data => {
            console.log('Data was successfully added to the database.');
        })
        .catch(error => {
            console.log(error);
        });
};

const getAllHousemates = async db => {
    const result = await db.any(`SELECT * FROM housemates`);
    return result;
};

const getAllSeasons = async db => {
    const result = await db.any(`SELECT * FROM seasons LIMIT row_count OFFSET offset`);
    return result;
};

const getAllEffects = async db => {
    const result = await db.any(`SELECT * FROM effects`);
    return result;
};

const getEffectsBySeason = async (db, seasons) => {
    // create a string with the appropriate amount of conditions while maintaining the input sanitation
    // add the the query ${seasons[0]}
    // Pass seasons array as second argument

    let query =
        'SELECT housemate, positive, special, description, imageurl, seasonname FROM effects INNER JOIN seasons ON effects.seasonId=seasons.seasonId WHERE ';

    for (let i = 0; i < seasons.length; i++) {
        query += `seasons.seasonname = '${seasons[i]}' `;
        // Don't add an or to the last query
        if (i !== seasons.length - 1) {
            query += 'OR ';
        }
    }
    query += ';';

    const result = await db.any(query, seasons);
    return result;
};

const getHousematesBySeason = async (db, seasons) => {
    // create a string with the appropriate amount of conditions while maintaining the input sanitation
    // add the the query ${seasons[0]}
    // Pass seasons array as second argument

    let query =
        'SELECT housemateid, housematename, nickname, housematetagline, weeksinhouse, livedwith, dates, instagramfollowers, agenow, agewhenentered, imageurl, seasonname FROM housemates INNER JOIN seasons ON housemates.seasonId=seasons.seasonId WHERE ';

    for (let i = 0; i < seasons.length; i++) {
        query += `seasons.seasonname = '${seasons[i]}' `;
        // Don't add an or to the last query
        if (i !== seasons.length - 1) {
            query += 'OR ';
        }
    }
    query += ';';

    console.log(query);

    const result = await db.any(query, seasons);
    return result;
};

const getAllLeaderboard = async (db, limit, offset) => {
    const result = await db.any(`SELECT * FROM leaderboard ORDER BY score DESC`);
    return result;
};

const getLeaderboardWithPagination = async (db, limit, offset) => {
    const temp = [limit, offset];
    const result = await db.any(`SELECT * FROM leaderboard ORDER BY score DESC LIMIT $1 OFFSET $2`, temp);
    return result;
};

const addToLeaderboard = async (db, entry) => {
    const result = await db.one(
        'INSERT INTO leaderboard(username, score) VALUES(${username}, ${score}) RETURNING id',
        entry
    );
    return result;
};

module.exports = {
    dbInit,
    dbSeedSeasons,
    dbSeedHousemates,
    dbSeedEffects,
    getAllHousemates,
    getAllSeasons,
    getHousematesBySeason,
    getAllEffects,
    getEffectsBySeason,
    getAllLeaderboard,
    addToLeaderboard,
    getLeaderboardWithPagination,
};
