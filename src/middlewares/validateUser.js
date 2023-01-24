const validateUser = (req, res, next) => {
  const attributes = [ 'displayName', 'email', 'password', 'image' ]
  const newUser = req.body
  const hasAttributes = attributes.every((property) => {
    return property in newUser
  })
  if(!hasAttributes) {
    return res.status(400).json({message: "Todos os campos devem ser preenchidos"})
  }
  next();
}

module.exports = validateUser 