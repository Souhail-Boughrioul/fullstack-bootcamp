const knex = require('knex');
const knexConfig = require('../../knexfile'); // relative path from config
const db = knex(knexConfig.development);

module.exports = db;