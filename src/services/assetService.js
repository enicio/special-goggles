require('dotenv').config();
// const { RedisClient } = require('redis');
const assetModel = require('../models/assetModels');
const { redisGetAsync, redisSetAsync } = require('../utils/redis');

const EXPIRATION_TIME_SECONDS = 60;

async function createAsset(assets) {
  const result = await assetModel.createAsset(assets);
  console.log('on service', result);
  return result;
}

async function getAllAssets(assets) {
  const redisCache = await redisGetAsync('allAsset');
  if (redisCache) {
    return redisCache;
  }

  const result = await assetModel.getAllAssets(assets);
  await redisSetAsync('allAsset', JSON.stringify(result), EXPIRATION_TIME_SECONDS );
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
