const { Categories } = require('../models')

const createCategory = async ({ name }) => {
  return Categories.create({
    name
  });
}

const getAllCategories = async () => {
  return Categories.findAll()
}

const getCategoryById = async (id) => {
  return Categories.findOne({
    where: { id }
  })
}

const deleteCategory = async (id) => {
  return Categories.destroy({
    where: { id }
  })
}

module.exports = {
  deleteCategory,
  getAllCategories,
  getCategoryById,
  createCategory
}