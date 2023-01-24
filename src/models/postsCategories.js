const PostCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategoriesTable = sequelize.define('postCategories', 
  {}, 
  {
    timestamps: false,
    tableName:'posts_categories',
    underscored: true
  });

  PostCategoriesTable.associate = (models) => {
    models.Post.belongsToMany(models.Categories, {
      as: "categories",
      through: PostCategoriesTable,
      foreignKey: 'post_id',
      otherKey: 'categories_id'
    });

    models.Categories.belongsToMany(models.Post, {
      as: "posts",
      through: PostCategoriesTable,
      foreignKey: 'categories_id',
      otherKey: 'post_id'
    });
  }

  return PostCategoriesTable;
};

module.exports = PostCategoriesSchema;