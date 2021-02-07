const express = require('express');
const router = express.Router();
const { createUserValidationRules, validate } = require('../validators/user');

const { createUser } = require('../controllers/users');

router.route('/').post(createUserValidationRules(), validate, createUser);

module.exports = router;
