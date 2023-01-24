const PostSchema = (sequelize, DataTypes) => {
  const PostTable = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    published: DataTypes.DATE,
    update: DataTypes.DATE,   
  },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts'
    });

    PostTable.associate = (models) => {
      PostTable.belongsTo(models.User, {
        as: 'user',
        foreignKey: "userId"
      })
    }

    return PostTable;
}

module.exports = PostSchema