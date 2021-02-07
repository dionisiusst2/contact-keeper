const User = require('../models/User');
const { check, validationResult } = require('express-validator');

// @route     POST api/users
// @desc      Register a user
// @access    Public
exports.createUser = (req, res) => {
  res.status(200).json({
    message: 'success',
  });
};
