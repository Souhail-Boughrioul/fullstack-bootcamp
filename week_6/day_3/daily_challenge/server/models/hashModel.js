const db = require('../config/db');

const addHashedPassword = (trx, data) => trx('hashpwd').insert(data);
const getPasswordByUsername = (username) => db('hashpwd').where({username}).first();

module.exports = { addHashedPassword, getPasswordByUsername };