const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { signupValidationForUser, loginValidationForUser } = require('./authValidation');




module.exports = router;