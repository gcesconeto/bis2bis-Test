module.exports = (error, _req, res, _next) => {
  console.log(error);
  let body = { message: error.message };
  if (error.status) res.status(error.status);
  if (error.extraInfo) body = { ...body, ...error.extraInfo };
  res.json(body);
  return res.status(500).json('Internal Server Error');
};
