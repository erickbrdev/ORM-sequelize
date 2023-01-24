const express = require('express');
const userController = require('../controllers/user.controller')
const validateUser = require('../middlewares/validateUser')
const userRouter = express.Router();

userRouter.post('/', validateUser, userController.createUser);
userRouter.get('/', userController.allUsers);
userRouter.get('/:id', userController.userById)

module.exports = userRouter;