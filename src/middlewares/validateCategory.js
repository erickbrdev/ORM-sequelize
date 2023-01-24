const validateCategory = (req, res, next) => {
  const { name } = req.body

  if(!name) {
    res.status(400).json({message: "Campo nome é obrigatório"})
  }

  next() 
};

module.exports = validateCategory