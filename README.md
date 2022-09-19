# Bis2Bis Test

[Em Português](https://github.com/gcesconeto/bis2bis-Test/blob/797433e85ebaa2dc686817c40e0520d9a8c60fd6/README.pt.md)

## Context

This project was developed as a coding test for a position at [Bis2Bis](www.bis2bis.com.br).

The proposal requested an application, consisting of a script and an API using Node.js. The script must be capable of consuming an external API and populating a mongoDB database with the retrieved data. The API must be capable of providing CRUD actions to manipulate the populated database.


These are the main technologies used:
* Node.js + express for API creation,
* Axios for API consumption,
* mongoDB as database,
* Joi for input validation.
* Jest + supertest for integration tests.


## Installation

### Requirements:
* npm with Node.js v14.x +
* mongoDB v4.4+
### Setup:
* Clone the repository https://github.com/gcesconeto/bis2bis-Test,
* Run `npm install` in the root folder of the cloned repository,
* Rename the provided `.env.example` file to `.env`.
  * Edit this file with the relevant data to connect and configure your mongoDB database and also the desired PORT where the API will be exposed.
## Using the script
To consume the external API and populate the database run `npm run db:populate` in the root folder.
The user is informed of the progress through console messages.

Another script is also provided for wiping the database collection, simply run `npm run db:wipe`. If the `NODE_ENV` environment variable is set to `production` this script will prompt for confirmation before proceeding.


## Using the API

Run `npm start` in the root directory, the API will be available on the configured port, default URL: `http://localhost:3000`

### Data example:

```
{
  "domains": [
    "atlantida.edu.ar"
  ],
  "alpha_two_code": "AR",
  "country": "Argentina",
  "web_pages": [
    "http://www.atlantida.edu.ar/"
  ],
  "name": "Universidad Atlantida Argentina",
  "state-province": "Buenos Aires"
}
```

### Endpoints:
* GET `/`:
  * Responds with `200` and a basic HTML with a link to the documentation.
* GET `/universities`:
  * Responds basic data from the first 20 universities from the database,
  * If the query string `?country=(country)` is used, only universities from that country are returned,
  * If the query string `?page=(page >= 1)` is used, the requested 20 items page is returned.
* GET `/universities/:id`:
  * Responds with `200` and detailed data from the university relating to the provided id,
  * Responds with `404` if the provided id is not in the database,
  * Responds with `422` if the provided id is malformed.
* POST `/universities`:
  * Receives a JSON body in the format exemplified above,
  * Responds with `201` and the inserted item with corresponding id,
  * If data is not according to format, responds with `422`and the relevant error,
  * If the name, state-province, and country fields of the received data conflicts with items already in the database, responds with `409`, and the conflicting items.
* PUT `/universities/:id`:
  * Receives a JSON body with any combination of the following keys: web_pages, name and domains,
  * Responds with `200` if updated successfully,
  * If data is not according to format, responds with `422`and the relevant error,
  * Responds with `404` if the provided id is not in the database,
  * Responds with `422` if the provided id is malformed.
* DELETE `/universities/:id`:
  * Responds with `204` if deleted successfully,
  * Responds with `404` if the provided id is not in the database,
  * Responds with `422` if the provided id is malformed.

## Tests

Integration tests were created for every endpoint covering the happy & unhappy paths.
To run them use `npm test`.

## Contact

* Guilherme Cesconeto
* [`Github`](https://github.com/gcesconeto)
