const booksModel = require('../models/booksModel');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await booksModel.getAllBooks();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await booksModel.getBookById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const [newBook] = await booksModel.createBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const [updatedBook] = await booksModel.updateBook(req.params.id, req.body);
    if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
    res.json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deleted = await booksModel.deleteBook(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
