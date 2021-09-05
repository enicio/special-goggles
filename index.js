require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mqtt = require('mqtt');
const app = express();
const http = require('http').createServer(app);

// const SOCKET_SERVER_PORT = 8000;

const options = {
  host: 'broker.emqx.io',
  port: 1883,
};

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// io.listen(SOCKET_SERVER_PORT);

require('./src/socket/')(io);


const client = mqtt.connect(options);

require('./src/mqtt')(client, io);

const { PORT } = process.env;


app.use(express.json());
app.use(cors());

app.use('/images/', express.static(path.join(__dirname, 'uploads')));
app.use(require('./src/routes'));

http.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

module.exports = app;
