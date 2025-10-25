const db = require('../config/db');

const getAllBooks = () => db('books').select('*');
const getBookById = (id) => db('books').where({ id }).first();
const createBook = (book) => db('books').insert(book).returning('*');
const updateBook = (id, book) => db('books').where({ id }).update(book).returning('*');
const deleteBook = (id) => db('books').where({ id }).del();

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };
