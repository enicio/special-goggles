const userService = require('../services/userService');

const ERRO_409 = 409;
async function findUser(req, res, next) {
  const url = req.originalUrl;
  const { email } = req.body;
  const user = await userService.findByEmail(email);


  if (user) {
    return res.status(ERRO_409).json({ message: 'User already registered' });
  }
  next();
}

module.exports = findUser;
