const userService = require("../services/user.service");

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  return res.status(201).json(newUser)
}

const allUsers = async (_req, res) => {
  const getAllUsers = await userService.getAllUsers();
  return res.status(200).json(getAllUsers)
}

const userById = async (req, res) => {
  const { id } = req.params;
  const userById = await userService.getUserById(id)

  res.status(200).json(userById)
}


module.exports = {
  createUser,
  allUsers,
  userById
}