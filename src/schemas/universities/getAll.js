const Joi = require('joi');

module.exports = Joi.object({
  country: Joi.string().alphanum(),
  page: Joi.number().integer().min(1),
});
