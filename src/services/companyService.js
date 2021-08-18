const companyModel = require('../models/companyModel');

async function createCompany(assets) {
  const result = await companyModel.createCompany(assets);
  console.log('on service', result);
  return result;
}

async function getAllCompany() {
  const result = await companyModel.getAllCompany();
  return result;
}

module.exports = { createCompany, getAllCompany };
