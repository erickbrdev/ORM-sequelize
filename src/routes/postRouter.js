const express = require('express');
const postController = require('../controllers/post.controller');
const { authMiddleware } = require('../middlewares/authMiddleware')
const postRouter = express.Router()

postRouter.post('/', authMiddleware, postController.createPost);
postRouter.get('/', postController.allPosts);
postRouter.get('/:id', postController.postById);
postRouter.get('/', postController.searchPost)
postRouter.put('/:id', postController.updatePostById);
postRouter.delete('/:id', postController.deletePost);

module.exports = postRouter