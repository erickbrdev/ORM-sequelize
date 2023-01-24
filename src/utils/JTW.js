const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256'
}

const SECRET_TOKEN = 'dsaldpsacxsadwasdxzal'

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_TOKEN, jwtConfig)
};

const authTokenValidation = async (token) => {
  if (!token) {
    const error = new Error("missing auth token");
    error.status = 401;
    throw error;
  }
  try {
      const instrospection = await jwt.verify(token, SECRET_TOKEN);
      return instrospection;
  } catch(error) {
      const err = new Error("jwt invalid");
      err.status = 401;
      throw err;
 }
};

module.exports = {
  generateToken,
  authTokenValidation,
}

