const Joi = require('joi');

const STATUS_400 = 400;
const MIN_LENGTH = 3;

const schema = Joi.object({
  name: Joi.string()
    .min(MIN_LENGTH)
    .message('"Name" is a required filed')
    .required()
});

function companyValidateFields(req, res, next) {
  const { name } = req.body;
  const validateData = schema.validate({ name });
  if (validateData.error) {
    return res.status(STATUS_400).json({ message: validateData.error.message });
  }
  next();
}

module.exports = companyValidateFields;
