const express = require('express');
const app = express();
const booksRoutes = require('./server/routes/booksRoutes');
const PORT = 5000;

require('dotenv').config();
app.use(express.json());


app.use('/books', booksRoutes);

app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})