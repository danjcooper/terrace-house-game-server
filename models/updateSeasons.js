const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');
const Housemates = require('../models/housemates');
const housemates = require('../models/housemates');

class UpdatedSeasons {
    constructor(seasonData, housemateData) {
        this.id = seasonData.id;
        this.housemateData = housemateData.map(housemate => Housemates.create(housemate));
    }

    static create() {
        return new UpdatedSeasons(seasonData, housemateData);
    }
}
