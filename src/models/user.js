const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Post, {
      as: "posts",
      foreignKey: "userId"
    })
  }
  return UserTable
}

module.exports = UserSchema