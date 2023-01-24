const { authTokenValidation } = require('../utils/JTW');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const payload = await authTokenValidation(token);

  if (!payload) {
    const err = new Error("jwt invalid");
    err.status = 401;
    throw err;
  }

  next();
};

module.exports = {
  authMiddleware,
}