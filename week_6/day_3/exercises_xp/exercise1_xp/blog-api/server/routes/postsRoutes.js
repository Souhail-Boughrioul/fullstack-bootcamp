const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.getAllPosts);      // GET /posts
router.get('/:id', postsController.getPostById);   // GET /posts/:id
router.post('/', postsController.createPost);      // POST /posts
router.put('/:id', postsController.updatePost);   // PUT /posts/:id
router.delete('/:id', postsController.deletePost);// DELETE /posts/:id

module.exports = router;
