DROP TABLE IF EXISTS seasons cascade;

CREATE TABLE seasons (
	seasonId SERIAL PRIMARY KEY,
    seasonName VARCHAR(255),
    coupleCount int,
    housemateCount int,
    dateCount int,
    lengthOfSeason int,
    seasonCode VARCHAR(255)
);

DROP TABLE IF EXISTS housemates;

CREATE TABLE housemates (
	housemateId SERIAL PRIMARY KEY,
    housemateName VARCHAR(255),
    nickname VARCHAR(255),
    housemateTagline VARCHAR(1000),
    weeksInHouse int,
    livedWith int,
    dates int,
    instagramFollowers int,
    ageNow int,
    ageWhenEntered int,
    imageURL VARCHAR(2555),
    seasonId int,
    FOREIGN KEY (seasonId) REFERENCES seasons(seasonId) 

);

DROP TABLE IF EXISTS effects;

CREATE TABLE effects (
	effectId SERIAL PRIMARY KEY,
    housemate VARCHAR(255),
    positive BOOLEAN,
    special BOOLEAN,
    description VARCHAR(2555),
    imageURL VARCHAR(2555),
    seasonId int,
    FOREIGN KEY (seasonId) REFERENCES seasons(seasonId) 

);

DROP TABLE IF EXISTS leaderboard;

CREATE TABLE leaderboard (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    score INT
);