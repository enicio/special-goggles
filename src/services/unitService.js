const unitModel = require('../models/unitModels');

async function createUnit(unit) {
  const result = await unitModel.createUnit(unit);
  return result;
}

async function getAllUnit() {
  const result = await unitModel.getAllUnit();
  return result;
}

async function getUnitByCompanyId(companyId) {
  const result = await unitModel.getUnitByCompanyId(companyId);
  return result;
}

module.exports = { createUnit, getAllUnit, getUnitByCompanyId };
