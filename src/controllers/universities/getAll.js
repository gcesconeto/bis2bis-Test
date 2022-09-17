const { OK } = require('http-status-codes').StatusCodes;

const { getAll } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { country = null } = req.query;
    const result = await getAll(country, req.body);
    return res.status(OK).json(result);
  } catch (err) {
    return next(err);
  }
};
