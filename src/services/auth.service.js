const { User } = require('../models');
const { generateToken } = require('../utils/JTW');

const authetication = async ({ email, password}) => {
  const users = await User.findOne({
    attributes: ['id', 'email', 'displayName'], 
    where: { email, password }
  });

  if (!users) {
    const error = new Error();
    error.status = 401;
    return error.message = "Usuário ou senha inválidos"; 
  }
  
  const token = generateToken({
    id: users.dataValues.id,
    email: users.dataValues.email,
    displayName: users.dataValues.displayName
  });

  return { token }
}

module.exports = authetication;