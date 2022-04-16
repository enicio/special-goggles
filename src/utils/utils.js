const connection = require('../models/connection');
async function getAll(collection) {
  console.log('get all');
  try {
    const result = await connection()
      .then((db) => db.collection(collection).find().toArray());
    return result;
  } catch (e) {
    console.log(e);
  }
}

const PORCENTO =  100;

//As duas funcções abaixo são destinadas a gerar dados simulados para o status e a saude da maquina

function fakeHealth() {
  return Math.random().toFixed(1) * PORCENTO;
}

function fakeStatus(min, max) {
  const status = ['Running', 'Alerting', 'Stopped'];
  const position = Math.floor(Math.random() * (max - min + 1 )) + min;
  console.log(position);
  return status[position];
}

module.exports = { getAll, fakeHealth, fakeHealth, fakeStatus };
