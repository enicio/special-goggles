const userValidateFields = require('./userValidations');
const assetValidateFields = require('./assetValidations');
const companyValidateFields = require('./companyValidations');
const unitValidateFields = require('./unitValidations');
const userExist = require('./checkUser');
const upload = require('./upload');

module.exports = {
  assetValidateFields,
  companyValidateFields,
  unitValidateFields,
  userValidateFields,
  userExist,
  upload
};