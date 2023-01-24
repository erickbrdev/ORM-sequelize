const postService = require('../services/post.service')

const createPost = async (req, res) => {
  const newPost = await postService.createPost(req.body);
  
  return res.status(201).json(newPost);
};

const allPosts = async (_req, res) => {
  const getAllPosts = await postService.getAllPosts();

  return res.status(200).json(getAllPosts)
};

const postById = async (req, res) => {
  const { id } = req.params;
  const getPostById = await postService.getPostById(id)

  return res.status(200).json(getPostById)
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const data = req.body
  const [updatePost] = await postService.updatePost(id, data);

  return res.status(201).json(updatePost)
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const deletePostById = await postService.deletePost(id)

  return res.status(204).end()
};

const searchPost = async (req, res) => {
  const { q } = req.query
  const { allPosts } = await postService.searchPost(q)

  return res.status(200).json(allPosts)
};

module.exports = {
  createPost,
  allPosts,
  postById,
  updatePostById,
  deletePost,
  searchPost
}