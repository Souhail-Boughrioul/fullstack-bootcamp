const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Serve static HTML forms
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
