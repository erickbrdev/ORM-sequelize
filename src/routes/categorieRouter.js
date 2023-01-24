const express = require('express')
const categoryController = require('../controllers/category.controller');
const validateCategory = require('../middlewares/validateCategory')
const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.getAllCategories);
categoryRouter.get('/:id', categoryController.getCategoryById);
categoryRouter.post('/', validateCategory, categoryController.createCategory)
categoryRouter.delete('/:id', categoryController.deleteCategory);

module.exports = categoryRouter
