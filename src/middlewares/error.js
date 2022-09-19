const { INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;

module.exports = (error, _req, res, _next) => {
  // console.log(error);

  res.status(INTERNAL_SERVER_ERROR);
  if (error.status) res.status(error.status);

  let body = { message: error.message };
  if (error.extraInfo) body = { ...body, ...error.extraInfo };

  return res.json(body);
};
