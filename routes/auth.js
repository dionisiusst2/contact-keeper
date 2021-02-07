const express = require('express');
const router = express.Router();

const { getLoggedInUser, logIn } = require('../controllers/auth');

router.route('/').get(getLoggedInUser).post(logIn);

module.exports = router;
