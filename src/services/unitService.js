const unitModel = require('../models/unitModels');

async function createUnit(unit) {
  const result = await unitModel.createUnit(unit);
  console.log('on service', result);
  return result;
}

module.exports = { createUnit };
