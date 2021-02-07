const { check, body, validationResult } = require('express-validator');

const createUserValidationRules = () => {
  return [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ];
};

const logInValidationRules = () => {
  return [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ];
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
  createUserValidationRules,
  logInValidationRules,
  validate,
};
