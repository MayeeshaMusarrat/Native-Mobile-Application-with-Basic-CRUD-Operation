const joi = require('@hapi/joi');

const signupValidationForUser = joi.object ({
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

module.exports = { signupValidationForUser };