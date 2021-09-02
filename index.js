const express = require('express');
const path = require('path');
const cors = require('cors');
var mqtt = require('mqtt');
require('dotenv').config();

const options = {
  host: 'broker.emqx.io',
  port: 1883,
};

const client = mqtt.connect(options);

//setup the callbacks
client.on('connect', function () {
  console.log('Connected');
});

client.on('error', function (error) {
  console.log(error);
});

client.on('message', function (topic, message) {
  //Called each time a message is received
  console.log('Received message:', topic, message.toString());
});

client.subscribe('lab/rinoa');

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/images/', express.static(path.join(__dirname, 'uploads')));
app.use(require('./src/routes'));

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

module.exports = app;
