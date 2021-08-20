const connection = require('../models/connection');
async function getAll(collection) {
  try {
    const result = await connection()
      .then((db) => db.collection(collection).find().toArray());
    return result;
  } catch (e) {
    console.log(e);
  }
}

const PORCENTO =  100;

function fakeHealth() {
  return Math.random().toFixed(1) * PORCENTO;
}

function fakeStatus(min, max) {
  const status = ['Running', 'Alerting', 'Stopped'];
  const position = Math.floor(Math.random() * (max - min)) + min;
  return status[position];
}

module.exports = { getAll, fakeHealth, fakeHealth, fakeStatus };
