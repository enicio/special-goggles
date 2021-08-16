const Joi = require('joi');

const STATUS_400 = 400;
const MIN_LENGTH = 3;

const schema = Joi.object({
  model: Joi.string()
    .min(MIN_LENGTH)
    .message('"model" is a required filed')
    .required(),
  name: Joi.string()
    .min(MIN_LENGTH)
    .message('"name" is a required filed')
    .required(),
  status: Joi.string()
    .min(MIN_LENGTH)
    .message('"status" must be a valid email')
    .required(),
  health: Joi.number()
    .integer()
    .message('"health" is required')
    .required(),
  image: Joi.string()
    .min(MIN_LENGTH)
    .message('"Model" is a required filed')
    .required(),
  unitId: Joi.number()
    .integer()
    .message('"unitId" is required')
    .required(),
  companyId: Joi.number()
    .integer()
    .message('"companyId" is required')
    .required(),
});

function assetValidateFields(req, res, next) {
  console.log(req);
  const { model, name, status, health, image, unitId, companyId } = req.body;
  const validateData = schema
    .validate({ model, name, status, health, image, unitId, companyId });
  if (validateData.error) {
    return res.status(STATUS_400).json({ message: validateData.error.message });
  }
  next();
}

module.exports = assetValidateFields;
