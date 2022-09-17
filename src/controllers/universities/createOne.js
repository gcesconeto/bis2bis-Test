const { CREATED } = require('http-status-codes').StatusCodes;

const { createOne } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const result = await createOne(req.body);
    return res.status(CREATED).json(result);
  } catch (err) {
    return next(err);
  }
};
