const express = require('express');
const router = require('./routes/index.js');
const app = express();
const PORT = 3000;

app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})