const express = require('express');
const app = express();
const router = require('./routes/todos');

const PORT = 3000;
app.use(express.json());

app.use('/todos', router);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})