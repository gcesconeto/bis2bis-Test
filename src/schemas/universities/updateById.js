const Joi = require('joi');

module.exports = Joi.object({
  domains: Joi.array().items(Joi.string()),
  alpha_two_code: Joi.any().forbidden(),
  country: Joi.any().forbidden(),
  web_pages: Joi.array().items(Joi.string()),
  name: Joi.string().required(),
  'state-province': Joi.any().forbidden(),
});
