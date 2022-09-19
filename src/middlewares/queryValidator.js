const { UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;

module.exports = (schema) => (req, _res, next) => {
  const { error } = schema.validate(req.query);

  if (error) {
    error.status = UNPROCESSABLE_ENTITY;
    return next(error);
  }
  return next();
};
