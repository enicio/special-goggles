const express = require('express');
const path = require('path');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use('/images/', express.static(path.join(__dirname, 'uploads')));
app.use(require('./src/routes'));

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

module.exports = app;
