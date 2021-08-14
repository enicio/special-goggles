const assetModel = require('../models/assetModels');

async function createAsset(assets) {
  const result = await assetModel.createAsset(assets);
  console.log('on service', result);
  return result;
}

module.exports = { createAsset };
