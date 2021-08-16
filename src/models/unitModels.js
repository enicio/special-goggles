const connection = require('./connection');
const { ObjectId } = require('mongodb');
const { getAll } = require('../utils/utils');

async function createUnit(unit) {
  try {
    const result = await connection().then((db) => db.collection('units').insertOne(unit))
      .then((result) => result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function getAllUnit() {
  const result =  getAll('units');
  return result;
}

module.exports = { createUnit, getAllUnit };
