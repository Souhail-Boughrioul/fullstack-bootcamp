const express = require('express');
const app = express();
const { fetchPosts } = require('./data/dataService.js');

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts(); 
        console.log('Data successfully retrieved and sent as a response.');
        res.json(posts); 
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})