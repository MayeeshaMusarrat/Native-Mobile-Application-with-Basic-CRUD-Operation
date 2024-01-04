const joi = require('@hapi/joi');

const loginValidationForUser = joi.object({
    email: joi
    .string()
    .email()
    .required(),

    password: joi
    .string()
    .required()
})

module.exports = { loginValidationForUser };