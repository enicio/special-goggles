const userModel = require('../models/userModels');
const {redisSetAsync} = require('../utils/redis');

const EXPIRATION_TIME_SECONDS = 60;

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
  // const redisCache = await redisGetAsync('allUsers');
  // if (redisCache) {
  //   console.log('redis');
  //   return redisCache;
  // }

  const result = await userModel.getAllUsers();
  console.log('ate aqui');
  await redisSetAsync('allUsers', JSON.stringify(result), EXPIRATION_TIME_SECONDS );
  // await kombiRedis(result);
  console.log('mongo');
  return result;
}

module.exports = { createUser, findByEmail, getAllUsers };
