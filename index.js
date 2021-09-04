require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mqtt = require('mqtt');

const options = {
  host: 'broker.emqx.io',
  port: 1883,
};

const client = mqtt.connect(options);

require('./src/mqtt')(client);

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/images/', express.static(path.join(__dirname, 'uploads')));
app.use(require('./src/routes'));

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

module.exports = app;
