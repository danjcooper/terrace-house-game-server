# Terrace House API.

An API that provides data for the reality tv show Terrace House. <br>
The API is hosted [here](https://terrace-house-server.herokuapp.com/).

## About this project.

## Routes.

| Method | Route            | Description                                                                                                                            |
| ------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /housemates/all  | Returns an array of all housemates with stats for each                                                                                 |
| GET    | /seasons/all     | Returns an array of seasons with stats for each in [this format]().                                                                    |
| GET    | /seasons/:season | returns all the housemate data for a certain season in [this format](). Parameters should be pass based on [this naming convention](). |

## Data Formats.

### Season Parameters.

| Season                   | Parameter to use           |
| ------------------------ | -------------------------- |
| Boys & Girls Next Door   | baseurl/seasons/**B&GND**  |
| Closing Door             | baseurl/seasons/**CD**     |
| Boys & Girls in the City | baseurl/seasons/**B&GITC** |
| Aloha State              | baseurl/seasons/**AS**     |
| Opening New Doors        | baseurl/seasons/**OND**    |
| Tokyo 2019/2020          | baseurl/seasons/**T1920**  |

###
