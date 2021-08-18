const connection = require('../models/connection');
const unitService =  require('../services/unitService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;

async function createUnit(req, res) {
  const unit = req.body;
  const result = await unitService.createUnit(unit);
  res.status(CREATE_STATUS).send(result);
}

async function getAllUnit(req, res) {
  const result = await unitService.getAllUnit();
  res.status(RESPONSE_STATUS).send(result);
}

async function getUnitByCompanyId(req, res) {
  const { companyid } = req.params;
  const result = await unitService.getUnitByCompanyId(companyid);
  res.status(RESPONSE_STATUS).send(result);
}


module.exports = { createUnit, getAllUnit, getUnitByCompanyId };