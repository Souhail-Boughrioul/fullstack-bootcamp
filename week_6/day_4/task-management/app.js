const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

const PORT = 5000;

app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})