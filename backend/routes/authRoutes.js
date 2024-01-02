const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const joi = require('@hapi/joi');

/****
 *  Joi signup and login schemas check the validatiom of the variables.
 *  password field usage method:
 *  const validationResult = signupValidationSchema.validate({ password: 'M@yeesha123!' });
        if (validationResult.error) 
        {
        console.error(validationResult.error.message);
        } 
        else 
        {
        console.log('Password is valid!');
        }
 *****/

const signupValidationSchema = joi.object ({
    username: joi
    .string()
    .min(3)
    .max(30)
    .required(),

    email: joi
    .string()
    .email()
    .required(),

    password: joi
    .string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
    .messages({
        'string.pattern.base':
          'Password must have at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character.',
      })
    .required()
});

const loginValidationSchema = joi.object({
    email: joi
    .string()
    .email()
    .required(),

    password: joi
    .string()
    .required()
})

module.exports = router;