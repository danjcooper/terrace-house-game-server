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

### Season Codes.

When using the API the below codes are used for each season.

| Season                                          | Parameter to use                 |
| ----------------------------------------------- | -------------------------------- |
| All Seasons                                     | Base URL e.g. baseURL/housemates |
| Boys & Girls Next Door                          | url/**B&GND**                    |
| Closing Door                                    | url/**CD**                       |
| Boys & Girls in the City                        | url/**B&GITC**                   |
| Aloha State                                     | url/**AS**                       |
| Opening New Doors                               | url/**OND**                      |
| Tokyo 2019/2020                                 | url/**T1920**                    |
| Multiple Seasons (As above, separated with '+') | url/OND+CD+AS                    |

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
