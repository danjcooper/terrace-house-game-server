# Terrace House API.

An API that provides data for the reality tv show Terrace House. <br>
The API is hosted [here](https://terrace-house-server.herokuapp.com/).

## About this project.

## Routes.

| Method | Route                   | Description                                                                                                                                          |
| ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /housemates             | Returns an array of all housemates with stats for each                                                                                               |
| GET    | /seasons                | Returns an array of seasons with stats for each in [this format]().                                                                                  |
| GET    | /housemates/:season     | returns all the housemate data for a certain season in [this format](). Parameters should be pass based on [this naming convention]().               |
| GET    | /database/buildDatabase | Builds/rebuilds the database and with any updated data in the CSV. N.B. This is not available on Prod or without the relevant environment variables. |
| POST   | /leaderboard/new        | Adds a new entry to the leaderboard. Sent with `{username: string, score: number}` in the body.                                                      |
| GET    | /leaderboard/all        | Gets the leaderboard                                                                                                                                 |

## Data Formats.

### Season Codes.

When using the API the below codes are used for each season.
The base url for each route will return the data for all seasons. <br/>
For example: <br/>
`http://baseurl/housemates` returns all housemates. <br/>
`http://baseurl/housemates/OND` returns only housemates from Opening New Doors. <br/>
`http://baseurl/housemates/OND+AS` returns housemates from Opening New Doors & Aloha State. <br/>
This formatting is used on all routes.

| Season                                          | Parameter to use |
| ----------------------------------------------- | ---------------- |
| Boys & Girls Next Door                          | **B&GND**        |
| Closing Door                                    | **CD**           |
| Boys & Girls in the City                        | **B&GITC**       |
| Aloha State                                     | **AS**           |
| Opening New Doors                               | **OND**          |
| Tokyo 2019/2020                                 | **T1920**        |
| Multiple Seasons (As above, separated with '+') | **OND+CD+AS**    |

### Response Structures.

```javascript
// /seasons
[
  {
    seasonid: int,
    seasonname: string,
    couplecount: int,
    housematecount: int,
    datecount: int,
    lengthofseason: int,
  }
][
  // /housemates
  {
    housemateid: int,
    housematename: string,
    nickname: string / null,
    housematetagline: string,
    weeksinhouse: int,
    livedwith: int,
    dates: int,
    instagramfollowers: int,
    agenow: int,
    agewhenentered: int,
    imageurl: string,
    seasonid: int
  }
][
  // /housemates/:season
  {
    housematename: string,
    nickname: string / null,
    housematetagline: string,
    weeksinhouse: int,
    livedwith: int,
    dates: int,
    instagramfollowers: int,
    agenow: int,
    agewhenentered: int,
    imageurl: string,
    seasonname: string
  }
][
  // effects/:season
    {
    housemate: string,
    positive: boolean,
    special: boolean,
    description: string,
    imageurl: string,
    seasonname: string
  },
];
```

## Environment Variables.

```
ENVIRONMENT=DEV
DATABASE_URL=
```
