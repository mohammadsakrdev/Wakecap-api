const Joi = require('@hapi/joi');

/**
 * Add schema
 */
const addSchema = {
  body: Joi.object()
    .required()
    .keys({
      coordinates: Joi.object()
        .keys({
          coordinates: Joi.array()
            .items(Joi.number().required())
            .length(2)
            .required(),
          type: Joi.string()
            .required()
            .valid('Point')
        })
        .required(),
      is_active: Joi.boolean().required(),
      duration: Joi.number().required(),
      worker_id: Joi.string().required()
    })
};
module.exports = {
  addSchema
};
