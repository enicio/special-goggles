const companyService =  require('../services/companyService');

const CREATE_STATUS = 201;
const RESPONSE_STATUS = 200;

async function createCompany(req, res) {
  const asset = req.body;
  const result = await companyService.createCompany(asset);
  console.log('on controller', result);
  res.status(CREATE_STATUS).send(result);
}

async function getAllCompany(req, res) {
  const result = await companyService.getAllCompany();
  res.status(RESPONSE_STATUS).send(result);
}

module.exports = { createCompany, getAllCompany };
