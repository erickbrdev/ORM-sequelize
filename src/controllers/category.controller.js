const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const newCategory = await categoryService.createCategory(req.body);

  return res.status(201).json(newCategory)
}

const getAllCategories = async (_req, res) => {
  const allCategories = await categoryService.getAllCategories();

  return res.status(200).json(allCategories);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params
  const categoryById = await categoryService.getCategoryById(id);

  return res.status(200).json(categoryById)
}

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const deleteCategory = await categoryService.deleteCategory(id)

  return res.status(204).end();
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory
};