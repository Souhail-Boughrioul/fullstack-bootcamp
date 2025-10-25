const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes/books.js');

app.use(express.json());

app.use('/books', router);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})