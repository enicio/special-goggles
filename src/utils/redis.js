const redis = require('redis');
const { promisifyAll } = require('bluebird');
promisifyAll(redis);

if (!process.env.REDIS_TLS_URL)
  throw new Error('Invalid REDIS_URL');

// const redisClient = redis.createClient(process.env.REDIS_TLS_URL, {
//   tls: {
//     rejectUnauthorized: false
//   }
// });

const redisClient = redis.createClient({
  host: 'localhost',
  password: ''
});

redisClient.connect();

redisClient.on('error', err => {
  console.log('Error ' + err);
});

const redisGetAsync = async (key) => {
  console.log('get redis');
  // return new Promise((resolve, reject) => {
  await redisClient.get(key);
  // });
};

const redisSetAsync = async(key, value, expireInSeconds) => {
  // return new Promise((resolve, reject) => {
  console.log('set redis');
  await redisClient.set(key, value, 'EX', expireInSeconds);
  // });
};

module.exports = { redisClient, redisGetAsync, redisSetAsync};
