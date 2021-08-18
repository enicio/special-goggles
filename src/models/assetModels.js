const connection = require('./connection');
const { getAll } = require('../utils/utils');
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

async function getAllAssets() {
  const result =  getAll('assets');
  return result;
}


async function findByUnitId(unitid) {
  try {
    const assetsByUnit = connection()
      .then((db) => db.collection('assets')
        .find( { unitId: unitid} ).toArray());
    return assetsByUnit;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createAsset, getAllAssets, findByUnitId };
