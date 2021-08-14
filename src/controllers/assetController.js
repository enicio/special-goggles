const assetService =  require('../services/assetService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;

async function createAsset(req, res) {
  const asset = req.body;
  const result = await assetService.createAsset(asset);
  console.log('on controller', result);
  res.status(CREATE_STATUS).send(result);
}

module.exports = { createAsset };
