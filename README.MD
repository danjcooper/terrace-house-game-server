# Terrace House API.

An API that provides data for the reality tv show Terrace House. <br>
The API is hosted [here](https://terrace-house-server.herokuapp.com/).

## About this project.

## Routes.

| Method | Route                   | Description                                                                                                                                         |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /housemates             | Returns an array of all housemates with stats for each                                                                                              |
| GET    | /seasons                | Returns an array of seasons with stats for each in [this format]().                                                                                 |
| GET    | /housemates/:season     | returns all the housemate data for a certain season in [this format](). Parameters should be pass based on [this naming convention]().              |
| GET    | /database/buildDatabase | Builds/rebuilds the database and with any updated data in the CSV. NB. This is not available on Prod or without the relevant environment variables. |

## Data Formats.

### Season Parameters.

| Season                                          | Parameter to use       |
| ----------------------------------------------- | ---------------------- |
| All Seasons                                     | /housemates            |
| Boys & Girls Next Door                          | /housemates/**B&GND**  |
| Closing Door                                    | /housemates/**CD**     |
| Boys & Girls in the City                        | /housemates/**B&GITC** |
| Aloha State                                     | /housemates/**AS**     |
| Opening New Doors                               | /housemates/**OND**    |
| Tokyo 2019/2020                                 | /housemates/**T1920**  |
| Multiple Seasons (As above, separated with '+') | /housemates/OND+CD+AS  |

### Response Structures.

```JSON
    // /seasons
    [
        {}
    ]

    // /housemates
    [
        {}
    ]

    // /housemates/:season
    [
        {}
    ]

    // /housemates/:id
    [
        {}
    ]
```

## Environment Variables.

```
ENVIRONMENT=DEV
DATABASE_URL=
```
