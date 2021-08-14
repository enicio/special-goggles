const connection = require('./connection');
const { ObjectId } = require('mongodb');


async function createAsset(assets) {
  try {
    const result = await connection()
      .then((db) => db.collection('assets').insertOne(assets))
      .then((result) => result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { createAsset };
