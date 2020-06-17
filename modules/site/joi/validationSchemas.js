const Joi = require('@hapi/joi');

/**
 * Add schema
 */
const addSchema = {
  body: Joi.object()
    .required()
    .keys({
      clientId: Joi.string().required(),
      name: Joi.string().required(),
      coordinates: Joi.array()
        .items(Joi.number().required())
        .length(2)
        .required(),
      timezone: Joi.string().required(),
      startingHour: Joi.string().required(),
      endingHour: Joi.string().required(),
      lateThresholdHour: Joi.string().required(),
      totalInactiveHours: Joi.string().required()
    })
};
module.exports = {
  addSchema
};
