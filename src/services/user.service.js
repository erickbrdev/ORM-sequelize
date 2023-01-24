const { User, Post } = require('../models');

const createUser = async ({displayName, email, password, image}) => {
  return User.create(
    { displayName, email, password, image }
  )  
};

const getAllUsers = async () => {
  return User.findAll({
    include: {
      model: Post,
      as: "posts",      
    },
    attributes: {
      exclude: ["password", "userId", "id"]
    }
  });
};

const getUserById = async (id) => {
  return User.findOne({
    where: {id}, 
    include: {
      model: Post, 
      as: "posts",     
    },
    attributes: {
      exclude:  ["password", "userId", "id"]
    }
  })
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById
}