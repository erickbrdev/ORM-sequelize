const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Categories', {
    name: DataTypes.STRING
  },
  {
    timestamps:false,
    underscored: true,
    tableName: 'categories'
  });

  return CategoriesTable;
}

module.exports = CategoriesSchema