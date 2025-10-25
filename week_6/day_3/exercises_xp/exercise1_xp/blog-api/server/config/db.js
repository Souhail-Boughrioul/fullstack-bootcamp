const knex = require('knex');
const knexConfig = require('../../knexfile');

// create a knex instance using the 'development' environment config
const db = knex(knexConfig.development);

module.exports = db;
