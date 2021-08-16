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

// const upload = require('../middleware/uploadsRKT');


router.get('/', (req, res) => {
  res.send('kombi!');
});

router.post('/users',
  userValidateFields,
  userExist,
  userController.createUser
);

router.post('/assets',
  // assetValidateFields,
  upload.single('image'),
  assetController.createAsset
);

router.post('/companies',
  companyValidateFields,
  companyController.createCompany
);
router.get('/companies', companyController.getAllCompany);

router.post('/units',
  unitValidateFields,
  unitController.createUnit
);

module.exports = router;
