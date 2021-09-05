const { redisGetAsync } = require('../utils/redis');
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`conexão ${socket.id}`);
    socket.on('getTemp', async () => {
      const temp = await redisGetAsync('temp');
      socket.emit('setTemp', temp);
    });
  });
};
