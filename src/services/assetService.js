const assetModel = require('../models/assetModels');

async function createAsset(assets) {
  const result = await assetModel.createAsset(assets);
  console.log('on service', result);
  return result;
}

async function getAllAssets(assets) {
  const result = await assetModel.getAllAssets(assets);
  console.log('on service', result);
  return result;
}

async function findByUnitId(unitid) {
  const result = await assetModel.findByUnitId(unitid);
  console.log('on service', result);
  return result;
}


module.exports = { createAsset, getAllAssets, findByUnitId };
