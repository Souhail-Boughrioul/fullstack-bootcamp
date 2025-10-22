const express = require('express');
const app = express();
const books = require('./books.js');

app.use(express.json());

app.get('/api/books', (req,res)=>{
    res.json(books);
})

app.get('/api/books/:bookId', (req,res)=>{
    const id = Number(req.params.bookId);
    const book = books.find(book => book.id === id);

    if(!book){
        return res.status(404).json({message: 'Book not found'});
    }

    res.status(200).json(book);
})

app.post('/api/books', (req,res)=>{
    const {title, author, publishedYear} = req.body;

    if(!title || !author || !publishedYear){
        return res.status(400).json({ message: 'Title , author and publishYear are required' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    }

    books.push(newBook);

    res.status(201).json(newBook);

})

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})