const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function createUnit(unit) {
  try {
    const result = await connection().then((db) => db.collection('units').insertOne(unit))
      .then((result) => result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { createUnit };
