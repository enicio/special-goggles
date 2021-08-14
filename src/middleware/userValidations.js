const Joi = require('joi');

const STATUS_400 = 400;
const MIN_LENGTH = 3;

const schema = Joi.object({
  name: Joi.string()
    .min(MIN_LENGTH)
    .message('"Name" is a required filed')
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .message('"email" must be a valid email')
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

function validateFields(req, res, next) {
  const { name, email, unitId, companyId } = req.body;
  const validateData = schema.validate({ name, email, unitId, companyId });
  if (validateData.error) {
    return res.status(STATUS_400).json({ message: validateData.error.message });
  }
  next();
}

module.exports = validateFields;
