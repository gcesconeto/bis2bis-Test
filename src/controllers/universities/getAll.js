const { OK } = require('http-status-codes').StatusCodes;

const { getAll } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { country = null, page = 1 } = req.query;
    const result = await getAll(country, page);
    return res.status(OK).json(result);
  } catch (err) {
    return next(err);
  }
};
