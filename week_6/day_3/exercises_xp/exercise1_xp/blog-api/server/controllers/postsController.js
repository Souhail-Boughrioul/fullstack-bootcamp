const postsModel = require('../models/postsModel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postsModel.getAllPosts();
    res.json(posts);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postsModel.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const [newPost] = await postsModel.createPost(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const [updatedPost] = await postsModel.updatePost(req.params.id, req.body);
    if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
    res.json(updatedPost);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await postsModel.deletePost(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' });
  }
};
