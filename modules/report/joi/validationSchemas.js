const Joi = require('@hapi/joi');

/**
 * Add schema
 */
const getSchema = {
  query: Joi.object()
    .required()
    .keys({
      page: Joi.number()
        .integer()
        .min(1)
        .optional(),
      limit: Joi.number()
        .integer()
        .min(1)
        .optional(),
      clientId: Joi.string().optional(),
      siteId: Joi.string().optional()
    })
};
module.exports = {
  getSchema
};
