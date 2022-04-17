const userModel = require('../models/userModels');
const {redisSetAsync, redisGetAsync} = require('../utils/redis');

const EXPIRATION_TIME_SECONDS = 60;

async function createUser(user) {
  const result = await userModel.createUser(user);
  return result;
}

async function findByEmail(email) {
  const isEmail = await userModel.findByEmail(email);
  return isEmail;
}

async function getAllUsers() {
  const redisCache = await redisGetAsync('allUsers');
  if (redisCache) {
    console.log('Redissssssss');
    return redisCache;
  }

  const result = await userModel.getAllUsers();
  await redisSetAsync('allUsers', JSON.stringify(result), EXPIRATION_TIME_SECONDS );
  return result;
}

module.exports = { createUser, findByEmail, getAllUsers };
