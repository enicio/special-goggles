const Joi = require('joi');

const STATUS_400 = 400;
const MIN_LENGTH = 3;

const schema = Joi.object({
  name: Joi.string()
    .min(MIN_LENGTH)
    .message('"Name" is a required filed')
    .required(),
  companyId: Joi.string()
    .min(MIN_LENGTH)
    .message('"companyId" is required')
    .required(),
});

function unitValidateFields(req, res, next) {
  const { name, companyId } = req.body;
  const validateData = schema.validate({ name, companyId });
  if (validateData.error) {
    return res.status(STATUS_400).json({ message: validateData.error.message });
  }
  next();
}

module.exports = unitValidateFields;
