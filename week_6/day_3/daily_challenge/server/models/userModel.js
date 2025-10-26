const db = require('../config/db');

const getAllUsers = () => db('users').select('*');
const getUserById = (id) => db('users').where({id}).first();
const getUserByUsername = (username) => db('users').where({username}).first();
const addUser = (trx,user) => trx('users').insert(user).returning('*');
const updateUser = (id, data) => db('users').where({id}).update(data).returning('*');

module.exports = {getAllUsers, getUserById, getUserByUsername, addUser, updateUser};