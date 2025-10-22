const express = require('express');
const app = express();
const fs = require('fs');
const fitnessPosts = require('./data.js');
const { title } = require('process');


app.use(express.json())

app.get('/posts', (req,res)=>{
    res.json(fitnessPosts);
})

app.get('/posts/:id', (req,res)=>{
    const id = Number(req.params.id);
    const post = fitnessPosts.find(post => post.id === id);

    if(!post){
       return res.json({message: 'Post not found'})
    }

    res.json(post);
})

app.post('/posts', (req,res)=>{
     const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
        id: fitnessPosts.length + 1,
        title,
        content
    }
    fitnessPosts.push(newPost);
    res.json(newPost);
})

app.put('/posts/:id', (req,res)=>{
    const id = Number(req.params.id);
    const index = fitnessPosts.findIndex(post => post.id === id);
    if(index === -1){
       return res.json({message: 'Post not found'})
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const updatedPost = {
        id: fitnessPosts[index].id,
        title,
        content
    }

    fitnessPosts[index] = updatedPost;
    res.json(updatedPost);
})

app.delete('/posts/:id', (req, res)=>{
    const id = Number(req.params.id);
    const index = fitnessPosts.findIndex(post => post.id === id);
    if(index === -1){
        res.json('Post not found');
    }
    fitnessPosts.splice(index, 1);
    res.json({message: 'Post deleted successfully'})
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})