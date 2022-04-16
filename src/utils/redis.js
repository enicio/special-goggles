const redis = require('redis');

if (!process.env.REDIS_TLS_URL)
  throw new Error('Invalid REDIS_URL');

const redisClient = redis.createClient(process.env.REDIS_TLS_URL, {
  tls: {
    rejectUnauthorized: false
  }
});

const redisGetAsync = (key) => {
  console.log('get redis');
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, value) => {
      if (err)
        reject(err);
      else
        resolve(value);
    });
  });
};

const redisSetAsync = (key, value, expireInSeconds) => {
  return new Promise((resolve, reject) => {
    console.log('set redis');
    redisClient.set(key, value, 'EX', expireInSeconds, (err) => {
      if (err)
        reject(err);
      else
        resolve();
    });
  });
};

module.exports = { redisClient, redisGetAsync, redisSetAsync};
