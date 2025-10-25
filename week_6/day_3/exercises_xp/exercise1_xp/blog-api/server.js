const express = require('express');
const app = express();
const postsRoutes = require('./server/routes/postsRoutes');
const PORT = 3000;

app.use(express.json());
app.use('/posts', postsRoutes); // all /posts routes

// Simple 404 for any unmatched route
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


// Handle server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})