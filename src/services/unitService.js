const unitModel = require('../models/unitModels');

async function createUnit(unit) {
  const result = await unitModel.createUnit(unit);
  console.log('on service', result);
  return result;
}

async function getAllUnit() {
  const result = await unitModel.getAllUnit();
  console.log('on service', result);
  return result;
}

module.exports = { createUnit, getAllUnit };
