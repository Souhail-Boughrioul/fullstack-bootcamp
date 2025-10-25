const express = require('express');
const router = express.Router();

const books = [];

// Get all books
router.get('/', (req, res)=>{
    res.json(books);
})

// Add a new book
router.post('/', (req,res)=>{
    const {title, author, publishedYear} = req.body;

    if(!title || !author || !publishedYear){
        return res.json({message: 'Title, author and publishedYear are required fields'})
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    }
    books.push(newBook);
    res.json(newBook);
})

// Update a book by ID
router.put('/:bookId',(req,res)=>{
    const id = Number(req.params.bookId);
    const index = books.findIndex(book => book.id === id);
    if(index === -1){
        return res.json({message: 'Book not found'})
    }

    const {title, author, publishedYear} = req.body;

    if(!title || !author || !publishedYear){
        return res.json({message: 'Title, author and publishedYear are required fields'})
    }
    const updatedBook = {
        id: books[index].id,
        title,
        author,
        publishedYear
    }
    books[index] = updatedBook;
    res.json(updatedBook);
})

router.delete('/:bookId', (req,res)=>{
    const id = Number(req.params.bookId);
    const index = books.findIndex(book => book.id === id);
    if(index === -1){
        return res.json({message: 'Book not found'});
    }
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook);
})

module.exports = router;