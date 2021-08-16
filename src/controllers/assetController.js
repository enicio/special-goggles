const assetService =  require('../services/assetService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;

async function createAsset(req, res) {
  let { dados } = req.body;
  console.log('Body', req.body);
  const { key, destination, location } = req.file;
  // console.log(req.imagePath);
  let urlImage = '';
  (location)? urlImage = location: urlImage = `http://localhost:5000/images/${key}`;
  let asset  = JSON.parse(dados);
  asset = {...asset, image: urlImage };
  // console.log(asset);
  const result = await assetService.createAsset(asset);
  console.log('on controller', result);
  res.status(CREATE_STATUS).send(asset);
}

module.exports = { createAsset };
