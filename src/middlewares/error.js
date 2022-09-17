module.exports = (error, _req, res, _next) => {
  // console.log(error);

  if (error.status) return res.status(error.status).json(error.message);

  return res.status(500).json('Internal Server Error');
};
