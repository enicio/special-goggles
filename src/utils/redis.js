const redis = require('redis');
const { promisifyAll } = require('bluebird');
promisifyAll(redis);

if (!process.env.REDIS_TLS_URL)
  throw new Error('Invalid REDIS_URL');

const redisClient = redis.createClient(process.env.REDIS_TLS_URL, {
  tls: {
    rejectUnauthorized: false
  }
});

redisClient.connect();

redisClient.on('error', err => {
  console.log('Error ' + err);
});

const redisGetAsync = async (key) => {
  console.log('get redis');
  return await redisClient.get(key);
};

const redisSetAsync = async(key, value, expireInSeconds) => {
  console.log('set redis 2');
  return await redisClient.set(key, value, 'EX', expireInSeconds);
};

module.exports = { redisClient, redisGetAsync, redisSetAsync};
