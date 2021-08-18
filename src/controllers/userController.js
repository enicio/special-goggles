const userService =  require('../services/userService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;

async function createUser(req, res) {
  const user = req.body;
  const result = await userService.createUser(user);
  console.log('on controller', result);
  res.status(CREATE_STATUS).send(result);
}

async function getAllUsers(req, res) {
  const result = await userService.getAllUsers();
  res.status(RESPONSE_STATUS).send(result);
}

module.exports = { createUser, getAllUsers };
