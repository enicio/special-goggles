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

async function findAssetId(assetid) {
  try {
    const IsAsset = connection()
      .then((db) => db.collection('assets')
        .findOne( {_id:ObjectId(assetid)} ))
      .then((result) => result );
    return IsAsset;
  } catch (e) {
    console.log(e);
  }
};

async function updateAsset({ assetid, asset}) {
  console.log('Model', assetid);
  try {
    const update = await connection()
      .then((db) => db.collection('assets')
        .updateOne({_id: ObjectId(assetid)}, {$set: asset }));
    return update;
  } catch (error) {
    console.log(error);
  }
}

async function deleteAsset(assetid) {
  try {
    const isDelete = await connection()
      .then((db) => db.collection('assets')
        .delteOne({_id:ObjectId(assetid)}));
    return isDelete;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createAsset,
  getAllAssets,
  findByUnitId,
  findAssetId,
  updateAsset,
  deleteAsset
};
