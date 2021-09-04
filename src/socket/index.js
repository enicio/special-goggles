module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`conexão ${socket.id}`);
    socket.on('getTemp', () => {
      socket.emit('setTemp', 150);
    });
  });
};
