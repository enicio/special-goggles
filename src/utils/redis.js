const redis = require('redis');
const { promisifyAll } = require('bluebird');
promisifyAll(redis);

if (!process.env.REDIS_TLS_URL)
  throw new Error('Invalid REDIS_URL');

const redisClient = redis.createClient({
  url: 'redis://redis:6379'
});

redisClient.connect();

redisClient.on('error', err => {
  console.log('Error from Redis ' + err);
});


const redisGetAsync = async (key) => {
  return await redisClient.get(key);
};

const redisSetAsync = async(key, value, expireInSeconds) => {
  return await redisClient.set(key, value, {
    EX: expireInSeconds,
    NX: true
  });
};

module.exports = { redisGetAsync, redisSetAsync};
