const unitService =  require('../services/unitService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;

async function createUnit(req, res) {
  const unit = req.body;
  const result = await unitService.createUnit(unit);
  console.log('on controller', result);
  res.status(CREATE_STATUS).send(result);
}

module.exports = { createUnit };