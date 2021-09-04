const router = require('express').Router();

const {
  userExist,
  userValidateFields,
  unitValidateFields,
  companyValidateFields,
  assetValidateFields,
  upload,
} = require('../middleware');

const {
  userController,
  assetController,
  companyController,
  unitController,
} = require('../controllers');

router.get('/', (_req, res) => {
  res.send('Para mais detalhes acesse https://github.com/enicio/special-goggles ');
});

router.post('/users',
  userValidateFields,
  userExist,
  userController.createUser
);
router.get('/users', userController.getAllUsers);

router.post('/assets',
  // assetValidateFields,
  upload.single('image'),
  assetController.createAsset
);

router.get('/assets', assetController.getAllAssets);
router.get('/assets/:assetid', assetController.findAssetId);
router.get('/assets/unit/:unitid', assetController.findByUnitId);
router.put('/assets/:assetid', assetController.updateAsset);
router.delete('/assets/:assetid', assetController.deleteAsset);

router.post('/companies',
  companyValidateFields,
  companyController.createCompany
);
router.get('/companies', companyController.getAllCompany);

router.post('/units',
  unitValidateFields,
  unitController.createUnit
);
router.get('/units', unitController.getAllUnit);
router.get('/units/:companyid', unitController.getUnitByCompanyId);

module.exports = router;
