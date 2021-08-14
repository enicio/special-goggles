const assetService =  require('../services/assetService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;

async function createAsset(req, res) {
  let { dados } = req.body;
  console.log(req.file);
  const { key, destination } = req.file;
  // console.log(req.imagePath);
  let asset  = JSON.parse(dados);
  asset = {...asset, image: `${destination}${key}` };
  // console.log(asset);
  const result = await assetService.createAsset(asset);
  console.log('on controller', result);
  res.status(CREATE_STATUS).send(result);
}

module.exports = { createAsset };
