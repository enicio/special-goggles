const assetService =  require('../services/assetService');
const { fakeHealth, fakeStatus } = require('../utils/utils');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;
const MIN = 0;
const MAX = 2;

async function createAsset(req, res) {
  let { data } = req.body;
  let urlImage = '';

  if ( req.file) {
    const { key, location } = req.file;
    (location)? urlImage = location : urlImage = `http://localhost:5000/images/${key}`;
  }
  let asset  = JSON.parse(data);
  asset = {...asset,
    status: fakeStatus(MIN, MAX),
    health:fakeHealth(),
    image: urlImage
  };
  await assetService.createAsset(asset);
  res.status(CREATE_STATUS).send(asset);
}

async function getAllAssets(req, res) {
  const result = await assetService.getAllAssets();
  res.status(RESPONSE_STATUS).send(result);
}

async function findByUnitId(req, res) {
  const { unitid } = req.params;
  const result = await assetService.findByUnitId(unitid);
  res.status(RESPONSE_STATUS).send(result);
}

async function findAssetId(req, res) {
  const { assetid } = req.params;
  console.log(assetid);
  const result = await assetService.findAssetId(assetid);
  res.status(RESPONSE_STATUS).send(result);
}

async function updateAsset(req, res) {
  const { assetid } = req.params;
  const asset = req.body;
  const result = await assetService.updateAsset({assetid, asset});
  res.status(CREATE_STATUS).send(result);
}

async function deleteAsset(req, res) {
  const { assetid } = req.params;
  const result = await assetService.deleteAsset(assetid);
  res.status(CREATE_STATUS).send(result);
}

module.exports = {
  createAsset,
  getAllAssets,
  findByUnitId,
  findAssetId,
  updateAsset,
  deleteAsset
};
