const connection = require('./connection');
const { getAll } = require('../utils/utils');
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
  const result =  getAll('companies');
  return result;
}

module.exports = { createCompany, getAllCompany };
