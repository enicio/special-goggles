const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function createCompany(company) {
  try {
    const result = await connection()
      .then((db) => db.collection('companies').insertOne(company))
      .then((result) => result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function getAllCompany() {
  try {
    const result = await connection()
      .then((db) => db.collection('companies').find().toArray());
    return result;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { createCompany, getAllCompany };
