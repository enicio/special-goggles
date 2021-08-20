const assetService =  require('../services/assetService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;
const NORMAL =  100;

async function createAsset(req, res) {
  let { data } = req.body;
  let urlImage = '';

  if ( req.file) {
    const { key, location } = req.file;
    (location)? urlImage = location : urlImage = `http://localhost:5000/images/${key}`;
  }
  let asset  = JSON.parse(data);
  asset = {...asset,
    status: 'Alerting',
    health: Math.random().toFixed(1) * NORMAL,
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
  // console.log(req.params);
  const { assetid } = req.params;
  const asset = req.body;
  // console.log(asset);
  const result = await assetService.updateAsset({assetid, asset});
  res.status(CREATE_STATUS).send(result);
}



module.exports = { createAsset, getAllAssets, findByUnitId, findAssetId, updateAsset };
