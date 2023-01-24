const authetication = require('../services/auth.service');

const authController = async (req, res) => {
  const token = await authetication(req.body);
  
  return res.status(200).json(token);
}

module.exports = authController