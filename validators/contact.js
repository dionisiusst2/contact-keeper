const { check, body, validationResult } = require('express-validator');

const createContactValidationRules = () => {
  return [check('name', 'Name is required').not().isEmpty()];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json({
    errors: errors.array(),
  });
};

module.exports = {
  createContactValidationRules,
  validate,
};
