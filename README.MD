# Terrace House API.

An API that provides data for the reality tv show Terrace House. <br>
The API is hosted [here](https://terrace-house-server.herokuapp.com/).

## About this project.

## Routes.

| Method | Route                   | Description                                                                                                                                         |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /housemates/all         | Returns an array of all housemates with stats for each                                                                                              |
| GET    | /seasons/all            | Returns an array of seasons with stats for each in [this format]().                                                                                 |
| GET    | /seasons/:season        | returns all the housemate data for a certain season in [this format](). Parameters should be pass based on [this naming convention]().              |
| GET    | /database/buildDatabase | Builds/rebuilds the database and with any updated data in the CSV. NB. This is not available on Prod or without the relevant environment variables. |

## Data Formats.

### Season Parameters.

| Season                   | Parameter to use    |
| ------------------------ | ------------------- |
| Boys & Girls Next Door   | /seasons/**B&GND**  |
| Closing Door             | /seasons/**CD**     |
| Boys & Girls in the City | /seasons/**B&GITC** |
| Aloha State              | /seasons/**AS**     |
| Opening New Doors        | /seasons/**OND**    |
| Tokyo 2019/2020          | /seasons/**T1920**  |
| All Seasons              | /seasons/**ALL**    |
| Multiple Seasons         | TBC                 |

### Response Structures.

```JSON
    // /seasons
    [
        {}
    ]

    // /seasons/:season
    [
        {}
    ]

    // /housemates/all
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
