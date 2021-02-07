const express = require('express');
const router = express.Router();
const { getLoggedInUser, login } = require('../controllers/auth');
const { logInValidationRules, validate } = require('../validators/user');
const auth = require('../middleware/auth');

router
  .route('/')
  .get(auth, getLoggedInUser)
  .post(logInValidationRules(), validate, login);

module.exports = router;
