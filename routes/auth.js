const express = require('express');
const router = express.Router();
const { getLoggedInUser, login } = require('../controllers/auth');
const { logInValidationRules, validate } = require('../validators/user');

router
  .route('/')
  .get(getLoggedInUser)
  .post(logInValidationRules(), validate, login);

module.exports = router;
