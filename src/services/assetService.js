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
  return result;
}

async function findAssetId(assetid) {
  const result = await assetModel.findAssetId(assetid);
  return result;
}

async function updateAsset({ assetid, asset }) {
  const result = await assetModel.updateAsset({assetid, asset});
  return result;
}

async function deleteAsset(assetid) {
  const result = await assetModel.deleteAsset(assetid);
  return result;
}


module.exports = {
  createAsset,
  getAllAssets,
  findByUnitId,
  findAssetId,
  updateAsset,
  deleteAsset
};
