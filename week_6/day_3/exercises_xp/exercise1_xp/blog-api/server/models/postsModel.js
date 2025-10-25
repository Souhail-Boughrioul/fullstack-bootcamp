const db = require('../config/db');

// Functions that interact with the database
const getAllPosts = () => db('posts').select('*');
const getPostById = (id) => db('posts').where({ id }).first();
const createPost = (post) => db('posts').insert(post).returning('*');
const updatePost = (id, post) => db('posts').where({ id }).update(post).returning('*');
const deletePost = (id) => db('posts').where({ id }).del();

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
