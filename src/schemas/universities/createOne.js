const Joi = require('joi');

module.exports = Joi.object({
  domains: Joi.array().items(Joi.string().domain()),
  alpha_two_code: Joi.string().length(2).case('upper').required(),
  country: Joi.string().required(),
  web_pages: Joi.array().items(Joi.string().uri()),
  name: Joi.string().required(),
  'state-province': Joi.string(),
});
