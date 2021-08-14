const router = require('express').Router();

const {
  userExist,
  userValidateFields,
  unitValidateFields,
  companyValidateFields,
  assetValidateFields
} = require('./middleware');

const {
  userController,
  assetController,
  companyController,
  unitController,
} = require('./controllers');


router.get('/', (req, res) => {
  response.send('kombi!');
});

router.post('/users', userValidateFields, userExist, userController.createUser);

router.post('/assets', assetValidateFields, assetController.createAsset);

router.post('/companies', companyValidateFields, companyController.createCompany);

router.post('/units', unitValidateFields, unitController.createUnit);

module.exports = router;
