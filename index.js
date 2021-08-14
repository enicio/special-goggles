const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.use(require('./src/routes'));

module.exports = app;
