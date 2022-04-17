const companyModel = require('../models/companyModel');

async function createCompany(assets) {
  const result = await companyModel.createCompany(assets);
  return result;
}

async function getAllCompany() {
  const result = await companyModel.getAllCompany();
  return result;
}

module.exports = { createCompany, getAllCompany };
