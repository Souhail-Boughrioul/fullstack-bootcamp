const express = require('express');
const app = express();

const userRoutes = require('./server/routes/userRoutes');

const PORT = 5000;

app.use(express.json());

app.use('/', userRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})