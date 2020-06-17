const Joi = require('@hapi/joi');

/**
 * Add schema
 */
const addSchema = {
  body: Joi.object()
    .required()
    .keys({
      name: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      email: Joi.string()
        .email()
        .required()
    })
};
module.exports = {
  addSchema
};
