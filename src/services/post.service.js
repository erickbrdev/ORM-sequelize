const { Post, User, Categories } = require('../models');
const { Op } = require('sequelize')

const createPost = async ({ title, content, userId, published, update, categories }) => {
  return Post.create(
    {
      title, content, userId, published, update, categories
    },
    {
      include: [ { model: Categories, as: "categories" } ]
    }
  )
};

const getAllPosts = async () => {
  return Post.findAll({
    include: {
      model: User,
      as: 'user',
      attributes: {
        exclude: ["password", "id"]
      }
    },    
  });
};

const getPostById = async (id) => {
  return Post.findOne({
    where: { id },
    include: {
      model: User,
      as: 'user',
    },
    attributes: {
      exclude: ["password", "userId"]
    }
  })
};

const updatePost = async (id, { title, content, userId, published, update } ) => {
  return Post.update(
    { title, content, userId, published, update },
    { where: { id }}
  );
};

const deletePost = async (id) => {
  return Post.destroy({
    where: { id }
  })
};

const searchPost = async (query) => {
  const allPosts = await Post.findAll({
    where: {
      [Op.or]: [
        { title: {[Op.substring]: query }},
        { content: {[Op.substring]: query }}          
    ]},
    include: [
      {
        model: User,
        as: "user",
        attributes: {
          exclude: ["password"]
        }
      },
      {
        model: Categories,
        as: "categories",
        through: { attributes: []},
      },
    ],
  });

  return allPosts 
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost
}