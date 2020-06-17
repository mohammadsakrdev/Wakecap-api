const Joi = require('@hapi/joi');

/**
 * Add schema
 */
const addSchema = {
  body: Joi.object()
    .required()
    .keys({
      name: Joi.string().required(),
      clientId: Joi.string().required(),
      siteId: Joi.string().required()
    })
};
module.exports = {
  addSchema
};
