const userModel = require('../models/userModels');

async function createUser(user) {
  const result = await userModel.createUser(user);
  console.log('on service', result);
  return result;
}

async function findByEmail(email) {
  const isEmail = await userModel.findByEmail(email);
  return isEmail;
}

async function getAllUsers() {
  const result = await userModel.getAllUsers();
  return result;
}

module.exports = { createUser, findByEmail, getAllUsers };
