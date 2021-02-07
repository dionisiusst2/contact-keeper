const express = require('express');
const router = express.Router();
const { userValidationRules, validateUser } = require('../validators/user');

const { createUser } = require('../controllers/users');

router.route('/').post(userValidationRules(), validateUser, createUser);

module.exports = router;
